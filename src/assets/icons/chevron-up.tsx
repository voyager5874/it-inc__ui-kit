import { IconWrapper, IconWrapperProps } from '@/assets/icons/icon-wrapper'

export const ChevronUp = ({ svgProps, ...props }: IconWrapperProps) => {
  return (
    <IconWrapper {...props}>
      <svg
        {...svgProps}
        fill={'none'}
        height={'100%'}
        stroke={'currentColor'}
        strokeLinecap={'round'}
        strokeLinejoin={'round'}
        strokeWidth={'2'}
        viewBox={'0 0 24 24'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path d={'m18 15-6-6-6 6'} />
      </svg>
    </IconWrapper>
  )
}
