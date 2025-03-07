import * as React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <stackLayout className={`p-4 bg-white rounded-lg shadow-md ${className}`}>
            {children}
        </stackLayout>
    );
}