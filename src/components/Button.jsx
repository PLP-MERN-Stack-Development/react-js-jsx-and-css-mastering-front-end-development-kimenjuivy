import React from 'react';

/**
 * Reusable Button Component with multiple variants
 * @param {string} variant - Button style: 'primary', 'secondary', 'danger'
 * @param {string} size - Button size: 'sm', 'md', 'lg'
 * @param {boolean} disabled - Disable button
 * @param {function} onClick - Click handler
 * @param {React.ReactNode} children - Button content
 * @param {string} className - Additional classes
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  children, 
  className = '',
  type = 'button',
  ...props 
}) => {
  // Base button styles
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2';

  // Variant styles
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500 dark:bg-gray-500 dark:hover:bg-gray-600',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950',
    ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
  };

  // Size styles
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;