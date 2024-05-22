'use client';
import React from 'react';

function SnippetReveal({ children }) {
  const [isRevealed, setIsRevealed] = React.useState(false);
  return (
    <div>
      {isRevealed ? (
        children
      ) : (
        <div className='reveal'>
          <button onClick={() => setIsRevealed(true)}>Reveal Content</button>
        </div>
      )}
    </div>
  );
}

export default SnippetReveal;
