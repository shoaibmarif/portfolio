import React, { ReactNode } from 'react';

interface WrapperProps {
    children: ReactNode;
    classes?: string;
}

export const Wrapper: React.FC<WrapperProps> = ({ children, classes = '' }) => (
    <div className={`${classes} mx-auto container`}>
        {children}
    </div>
);
