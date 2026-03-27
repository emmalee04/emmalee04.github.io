import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';
import thoughtsData from '../../data/thoughtsdata.js';
import LetterIndex from '../../components/LetterIndex';
import MarkdownRenderer from '../../components/MarkdownRenderer';


const ThoughtDetail = () => {
  const { slug } = useParams();
  const thought = thoughtsData.find((t) => t.slug === slug);

  if (!thought) return <div>Thought not found</div>;
  const isAbecedarium = thought.slug === 'abecedarium';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <div className="unblur-item" style={{ '--i': 1 }}>
          {thought.type === 'markdown' ? (
            <div className="markdown-content body-14 max-w-[768px] mx-auto pt-24 md:pt-8 flex-1">
              <MarkdownRenderer content={thought.content} />
            </div>
            ) : (
            <div className="w-full">
                <thought.component />
            </div>
            )}
        </div>
      </main>
      {isAbecedarium && <LetterIndex />}
    </div>
  );
};

export default ThoughtDetail;