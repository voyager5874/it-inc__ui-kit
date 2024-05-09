import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ChevronDown } from '@/assets/icons/chevron-down'
import { ChevronUp } from '@/assets/icons/chevron-up'
import { Typography, TypographyProps } from '@/ui/typography'
import * as SelectPrimitive from '@radix-ui/react-select'
import { clsx } from 'clsx'

import s from './select.module.scss'

export type SelectProps = {
  dense?: boolean
  fullWidth?: boolean
  label?: string
  onChange?: (event: { target: { name?: string; value: string } }) => void
  placeholder?: string
} & ComponentPropsWithoutRef<typeof SelectPrimitive.Root>
export const Select = forwardRef<ElementRef<typeof SelectPrimitive.Trigger>, SelectProps>(
  (
    { children, dense, disabled, fullWidth, label, onChange, onValueChange, placeholder, ...props },
    forwardedRef
  ) => {
    const handleOnChange = (data: any) => {
      if (typeof data === 'string' && onValueChange) {
        onValueChange(data)
      }
      if (onChange && typeof data === 'string') {
        onChange({ target: { name: props?.name, value: data } })
      }
      if (onChange && typeof data === 'object') {
        onChange(data)
      }
    }

    const classNames = {
      container: clsx(fullWidth && s.fullWidth),
      label: clsx(s.label, disabled && s.disabled),
      trigger: clsx(s.trigger, fullWidth && s.fullWidth, dense && s.dense),
      triggerIcon: clsx(s.triggerIcon),
      value: clsx(disabled && disabled),
    }

    return (
      <SelectPrimitive.Root {...props} disabled={disabled} onValueChange={handleOnChange}>
        {label ? (
          <label className={classNames.container}>
            <Typography as={'span'} className={classNames.label} variant={'body2'}>
              {label}
            </Typography>
            <SelectPrimitive.Trigger className={classNames.trigger} ref={forwardedRef}>
              <Typography
                as={SelectPrimitive.Value}
                className={classNames.value}
                placeholder={placeholder}
                variant={'body1'}
              />
              <SelectPrimitive.Icon asChild className={classNames.triggerIcon}>
                <ChevronDown size={16} />
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>
          </label>
        ) : (
          <SelectPrimitive.Trigger className={classNames.trigger} ref={forwardedRef}>
            <SelectPrimitive.Value placeholder={placeholder} />
            <SelectPrimitive.Icon asChild className={classNames.triggerIcon}>
              <ChevronDown size={16} />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
        )}
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content className={s.content} position={'popper'}>
            <SelectPrimitive.ScrollUpButton>
              <ChevronUp size={16} />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton>
              <ChevronDown size={16} />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  }
)

export type SelectItemProps = { dense?: boolean } & ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>

export const SelectItem = forwardRef<ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
  ({ children, className, dense, ...props }, forwardedRef) => {
    const classNames = {
      item: clsx(s.item, dense && s.dense, className),
    }

    const typographyVariant: TypographyProps<'span'>['variant'] = dense ? 'body2' : 'body1'

    // todo SelectPrimitive.ItemText should only contain text
    return (
      <SelectPrimitive.Item {...props} className={classNames.item} ref={forwardedRef}>
        <Typography as={SelectPrimitive.ItemText} variant={typographyVariant}>
          {children}
        </Typography>
      </SelectPrimitive.Item>
    )
  }
)
