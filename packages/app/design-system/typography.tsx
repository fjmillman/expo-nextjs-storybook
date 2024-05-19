import { forwardRef } from 'react';
import { Text, Platform, Linking, TextProps } from 'react-native';
import { TextLink as SolitoTextLink, TextLinkProps } from 'solito/link';

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
      onPress: (event) => {
        props.onPress && props.onPress(event);
        if (Platform.OS !== 'web' && href !== undefined) {
          Linking.openURL(href);
        }
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
