import { HTMLAttributes, ReactNode } from 'react';
import cls from './Card.module.scss';

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
