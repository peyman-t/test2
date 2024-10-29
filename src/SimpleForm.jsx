import React from 'react';

// function SimpleForm() {
const SimpleForm = () => {
  const handleSubmit = (event) => {
    // You need to stop the default form submission behavior
    event.preventDefault();
    // how you can access the form data
    const name = event.target.elements.name.value;
    console.log('Submitted name:', name);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default SimpleForm;