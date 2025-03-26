// Code By - Sandeepan Chakraborty (21MIM10072)
// Week 3 - Task 4_Code:

// Task 4: Button Component
import React, { useState } from 'react';

function CustomButton() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Click Me
    </button>
  );
}
