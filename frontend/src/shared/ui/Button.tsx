import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type = 'button', ...props }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
