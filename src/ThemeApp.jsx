import React, { createContext, useContext, useState } from 'react';

// Create Theme Context
const ThemeContext = createContext();

// Theme Provider Component
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook for using theme
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Toggle Button Component
const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="p-3 rounded-full border border-current hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
};

// Example Content Component
const Content = () => {
  const { isDark } = useTheme();
  
  return (
    <div className="space-y-4">
      <p className="text-lg">
        Current theme: <span className="font-bold">{isDark ? 'Dark' : 'Light'}</span>
      </p>
      <div className="space-y-2">
        <h3 className="font-medium">What we learned:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Context API for global state</li>
          <li>Custom hooks</li>
          <li>State management</li>
          <li>Component composition</li>
        </ul>
      </div>
    </div>
  );
};

// Main App Component
const ThemeDemo = () => {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Theme Context Demo</h1>
          <ThemeToggle />
        </div>
        
        <div className={`rounded-lg shadow-lg p-6 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white'
        }`}>
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Understanding React Context</h2>
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
};


// Wrap the export with ThemeProvider
const ThemeApp = () => (
  <ThemeProvider>
    <ThemeDemo />
  </ThemeProvider>
);

export default ThemeApp;