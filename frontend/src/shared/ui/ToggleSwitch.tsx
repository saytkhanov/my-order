import React, { forwardRef } from 'react';

interface ToggleSwitchProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(
    ({ label, id, ...props }, ref) => {
        return (
            <div className="flex items-center space-x-2">
                <input
                    ref={ref}
                    id={id}
                    type="checkbox"
                    className="relative inline-flex h-5 w-9 cursor-pointer rounded-full border-2 border-transparent bg-gray-200
                     transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2
                     focus:ring-blue-500 focus:ring-offset-2 peer checked:bg-blue-500"
                    {...props}
                />
                {label && (
                    <label className="text-sm font-medium text-gray-700" htmlFor={id}>
                        {label}
                    </label>
                )}
            </div>
        );
    }
);

ToggleSwitch.displayName = 'ToggleSwitch';
