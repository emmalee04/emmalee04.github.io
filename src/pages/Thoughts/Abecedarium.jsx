import React from 'react';
import LetterIndex from '../../components/LetterIndex';
import ReactMarkdown from "react-markdown";
import abecedariumContent from '../../content/abecedarium.md?raw';
import { entries } from '../../data/abecedarium';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const Abecedarium = () => {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <main className="pt-24 md:pt-8 p-8 flex-1">
        <div className="max-w-[768px] mx-auto">
          <div
            className="markdown-content body-14 mb-12 unblur-item"
            style={{ ['--i']: 0 }}
          >
            <ReactMarkdown
              components={{
                h1: ({node, ...props}) => (
                  <h1 
                    className="h1 underline decoration-1 decoration-wavy underline-offset-6 mb-8" 
                    {...props} 
                  />
                ),
              }}
            >
              {abecedariumContent}
            </ReactMarkdown>
          </div>

          <section className="space-y-16">
            {alphabet.map((letter, letterIndex) => {
              const items = entries[letter];
              if (!items || items.length === 0) return null;

              return (
                <div
                  key={letter}
                  id={letter}
                  className="letter-anchor space-y-6 unblur-item"
                  // style={{ ['--i']: letterIndex + 1 }}
                >
                  <h2 className="heading-1 sticky-letter">
                    {letter}
                  </h2>

                  <div className="space-y-4">
                    {/* {items.map((item, idx) => ( */}
                    {items.sort((a, b) => a.term.localeCompare(b.term)).map((item, idx) => (
                      <div key={idx} className="mt-6">
                        <h3 className="heading-2 mb-1">
                          {item.term}
                        </h3>
                        <div className="body-14 text-[var(--text-tertiary)] abecedarium-markdown">
                          <ReactMarkdown>{item.description}</ReactMarkdown>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>

        </div>
      </main>
      {/* <LetterIndex /> */}
    </div>
  );
};

export default Abecedarium;