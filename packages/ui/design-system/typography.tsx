import type { TextProps } from 'react-native';
import type { TextLinkProps } from 'solito/link';
import { forwardRef } from 'react';
import { Linking, Platform, Text } from 'react-native';
import { TextLink as SolitoTextLink } from 'solito/link';

/**
 * You can use this pattern to create components with default styles
 */
export const P = ({ className, ...props }: TextProps) => (
  <Text className={`my-4 text-base text-black ${className}`} {...props} />
);

/**
 * Components can have defaultProps and styles
 */
export const H1 = ({ className, ...props }: TextProps) => (
  <Text
    accessibilityRole="header"
    className={`my-4 text-3xl font-extrabold ${className}`}
    {...props}
  />
);

/**
 * This is a more advanced component with custom styles and per-platform functionality
 */
export interface AProps extends TextProps {
  href?: string;
  target?: '_blank';
  hrefAttrs?: {
    rel: 'noreferrer';
    target?: '_blank';
  };
}

export const A = forwardRef<Text, AProps>(function A(
  { className = '', href, target, ...props },
  ref,
) {
  const nativeAProps = Platform.select<Partial<AProps>>({
    web: {
      href,
      target,
      hrefAttrs: {
        rel: 'noreferrer',
        target,
      },
    },
    default: {
      onPress: (event): void => {
        props.onPress?.(event);
        if (Platform.OS !== 'web' && href !== undefined) {
          void Linking.openURL(href);
        }

        return;
      },
    },
  });

  return (
    <Text
      accessibilityRole="link"
      className={`text-blue-500 hover:underline ${className}`}
      {...props}
      {...nativeAProps}
      ref={ref}
    />
  );
});

export const TextLink = ({
  textProps,
  ...props
}: TextLinkProps & {
  textProps?: TextProps;
}) => (
  <SolitoTextLink
    {...props}
    className={`text-base font-bold text-blue-500 hover:underline ${props.className}`}
    textProps={{ ...textProps, style: textProps?.style }}
  />
);
