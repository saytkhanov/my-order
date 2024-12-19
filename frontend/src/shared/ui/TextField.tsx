import React, { forwardRef } from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ label, ...props }, ref) => {
        return (
            <div className="space-y-1">
                {label && (
                    <label className="block text-sm font-medium text-gray-700">
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900
                     focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    {...props}
                />
            </div>
        );
    }
);

TextField.displayName = 'TextField';
