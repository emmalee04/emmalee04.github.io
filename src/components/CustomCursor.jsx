import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Initial check
    checkMobile();

    // Listen for window resize
    window.addEventListener('resize', checkMobile);

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Check if hovering over work detail cards
    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if the target or its parents have the work detail card classes
      if (target.closest('.aspect-square') || target.closest('a[href*="/work/"]')) {
        setIsHoveringCard(true);
      } else {
        setIsHoveringCard(false);
      }
    };

    // Only add mouse event listeners on desktop
    if (!isMobile) {
      document.addEventListener('mousemove', updatePosition);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        document.removeEventListener('mousemove', updatePosition);
        document.removeEventListener('mouseenter', handleMouseEnter);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseover', handleMouseOver);
      }
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-200 ease-out"
        style={{
          left: position.x - (isHoveringCard ? 20 : 4),
          top: position.y - (isHoveringCard ? 20 : 4),
          transform: isVisible ? 'scale(1)' : 'scale(0)',
        }}
      >
        {isHoveringCard ? (
          <div className="w-8 h-8 bg-gray-800 rounded-full shadow-lg flex items-center justify-center">
            <span className="text-white text-[0.5rem] font-medium">View</span>
          </div>
        ) : (
          <div className="w-2 h-2 bg-gray-500 rounded-full shadow-lg" />
        )}
      </div>
    </>
  );
};

export default CustomCursor;
