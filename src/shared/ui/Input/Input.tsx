import {
    ChangeEvent, InputHTMLAttributes, memo,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props : InputProps) => {

  debugger
    const {
        className,
        value,
        onChange,
        type = 'text',
        // placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.currentTarget.value);
    };

    // const placeholderText =

    return (
        <div className={cls.InputWrapper}>
                <input
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    className={cls.input}
                    {...otherProps}
                />
        </div>
    );
});
