const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const LetterIndex = () => {
  return (
    <nav
      className="hidden md:block sticky bottom-0 left-0 right-0 z-40 backdrop-blur-md bg-[var(--bg-primary)/40]"
    >
      <div
        className="max-w-[768px] mx-auto px-4 md:px-6 overflow-x-auto no-scrollbar cursor-grab flex justify-center border-t"
        style={{ borderColor: 'var(--border-color)' }}
      >
        <ul
          className="
            flex min-w-max items-center h-12
            text-sm font-mono font-medium
            text-[var(--text-tertiary)]
            select-none
          "
        >
          {alphabet.map((letter) => (
            <li key={letter}>
              <a
                href={`#${letter}`}
                aria-label={`Go to section ${letter}`}
                draggable="false"
                className="
                  block px-2 py-2
                  transition-colors
                  hover:text-[var(--text-primary)]
                "
              >
                {letter}
              </a>
            </li>
          ))}

          {/* Scroll to top */}
          <li>
            <a
                href="#top"
                aria-label="Scroll to top"
                className="block px-2 py-2 hover:text-[var(--text-primary)] transition-colors"
                >
                #
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LetterIndex;