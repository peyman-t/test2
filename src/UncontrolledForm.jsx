import React from 'react';

// arrow function
const UncontrolledForm = () => {
    // event handlery
    // function handleSubmit(event) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Extract the form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('Form submitted:', { name, email, message }); // alert
    alert('Form submitted: ' + JSON.stringify({ name, email, message })); // alert
    // Here you would typically send the data to a server
  };

return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 border rounded-md"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea
                id="message"
                name="message"
                className="w-full px-3 py-2 border rounded-md"
                rows="4"
                required
            ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
        </button>
        <button type="reset" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2">
            Reset
        </button>
    </form>
);
};

export default UncontrolledForm;