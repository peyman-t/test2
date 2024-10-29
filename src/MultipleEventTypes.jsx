import React from 'react';

const MultipleEventTypes = () => {
    // Define the event handlers
  const handleMouseEnter = () => {
    console.log('Mouse entered the box');
  };

  const handleMouseLeave = () => {
    console.log('Mouse left the box');
  };

  const handleChange = (event) => {
    console.log('Input value changed to:', event.target.value);
  };

  const handleFocus = () => {
    console.log('Input focused');
  };

  const handleBlur = () => {
    console.log('Input blurred');
  };

  return (
    <div className="max-w-sm mx-auto mt-8">
      <div 
        className="bg-gray-200 p-4 mb-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </div>
      <input
        type="text"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Type something"
      />
    </div>
  );
};

export default MultipleEventTypes;