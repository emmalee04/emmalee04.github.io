import React from 'react';
import ReactMarkdown from 'react-markdown';

// We define the styles here once
export const markdownComponents = {
  h1: ({ node, ...props }) => (
    <h1 
      className="h1 underline decoration-1 decoration-wavy underline-offset-6 mb-8" 
      {...props} 
    />
  ),
  h2: ({ node, ...props }) => (
    <h2 className="heading-2 mb-4" {...props} />
  ),
  a: ({ href, children }) => (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[var(--dark-gray-color)] underline decoration-[var(--gray-color)] hover:decoration-black transition-all underline-offset-4"
    >
      {children}
    </a>
  ),
  // Pro-tip: Add ul/li here too so your book list looks good!
  ul: ({ children }) => <ul className="list-disc pl-5 my-4 space-y-2">{children}</ul>,
  li: ({ children }) => <li className="body-14 text-[var(--text-secondary)]">{children}</li>,
};

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown components={markdownComponents}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;