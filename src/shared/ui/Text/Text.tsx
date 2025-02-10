import { memo } from 'react';
import cls from './Text.module.css';
import {classNames, Mods} from "@/shared/classNames/classNames";

export enum TextTheme {
    PRIMARY = 'primary',
    ADDITIONAL = 'additional',
}

export enum TextAlign{
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center',
}

export enum TextSize{
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface TextProps {
    className?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {text && <span className={cls.text}>{text}</span>}
        </div>
    );
});
