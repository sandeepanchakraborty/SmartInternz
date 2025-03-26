// Code By - Sandeepan Chakraborty (21MIM10072)
// Week 3 - Task 1_Code:

import React, { useState } from 'react';

// Task 1: TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState('');

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <p className="text-lg">You typed: {text}</p>
    </div>
  );
}
