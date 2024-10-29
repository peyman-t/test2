import React from 'react';

const EventDelegation = () => {
  const handleClick = (event) => {
    if (event.target.tagName === 'LI') {
      console.log('Clicked item:', event.target.textContent);
    }
  };

  return (
    <ul onClick={handleClick} className="max-w-sm mx-auto mt-8 bg-gray-100 p-4 rounded">
      <li className="cursor-pointer hover:bg-gray-200 p-2 mb-2 rounded">Item 1</li>
      <li className="cursor-pointer hover:bg-gray-200 p-2 mb-2 rounded">Item 2</li>
      <li className="cursor-pointer hover:bg-gray-200 p-2 mb-2 rounded">Item 3</li>
      <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Item 4</li>
    </ul>
  );
};

export default EventDelegation;