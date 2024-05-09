import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import s from './button.module.scss';
export const buttonVariants = ['primary', 'secondary', 'tertiary', 'icon', 'ghost'];
export const buttonSizes = ['default', 'dense', 'fill'];
const Button = forwardRef((props, ref) => {
    const { asChild = false, className, size = 'default', type = 'button', variant = 'primary', ...rest } = props;
    const Component = asChild ? Slot : 'button';
    const classNames = clsx(s.base, s[size], s[variant], className);
    return _jsx(Component, { className: classNames, ref: ref, ...rest, type: type });
});
Button.displayName = 'Button';
export { Button };
