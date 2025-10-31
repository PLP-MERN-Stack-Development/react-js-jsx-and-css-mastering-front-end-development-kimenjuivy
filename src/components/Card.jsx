import React from 'react';

/**
 * Reusable Card Component for displaying content in a boxed layout
 * @param {React.ReactNode} children - Card content
 * @param {string} className - Additional classes
 * @param {boolean} hover - Enable hover effect
 * @param {function} onClick - Click handler
 */
const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  onClick,
  ...props 
}) => {
  // Base card styles
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden';
  
  // Hover effect
  const hoverStyles = hover 
    ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer' 
    : '';

  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

// Card sub-components for better composition
Card.Header = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

Card.Body = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 ${className}`}>
    {children}
  </div>
);

export default Card;