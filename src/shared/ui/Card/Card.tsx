import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement>{
    className?: string;
    children?: ReactNode;
}

export const Card = (props: CardProps) => {
    const { className, children, ...otherProps } = props;
    return (
        <div
            className={cls.Card}
            {...otherProps}
        >
            {children}
        </div>
    );
};
