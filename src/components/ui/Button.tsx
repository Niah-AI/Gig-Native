import * as React from "react";

interface ButtonProps {
    text: string;
    onTap: () => void;
    variant?: 'primary' | 'secondary' | 'danger';
    className?: string;
}

export function Button({ text, onTap, variant = 'primary', className = '' }: ButtonProps) {
    const getVariantClass = () => {
        switch (variant) {
            case 'primary':
                return 'bg-blue-500';
            case 'secondary':
                return 'bg-gray-500';
            case 'danger':
                return 'bg-red-500';
            default:
                return 'bg-blue-500';
        }
    };

    return (
        <button
            className={`${getVariantClass()} text-white p-4 rounded-lg text-center ${className}`}
            onTap={onTap}
        >
            {text}
        </button>
    );
}