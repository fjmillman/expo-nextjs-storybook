// override react-native types with react-native-web types
import 'react-native';

import type { MouseEvent } from 'react';

declare module 'react-native' {
  namespace StyleSheet {
    export function getSheet(): { id: string; textContent: string };
  }
  interface PressableStateCallbackType {
    hovered?: boolean;
    focused?: boolean;
  }
  interface ViewStyle {
    transitionProperty?: string;
    transitionDuration?: string;
  }
  interface TextProps {
    accessibilityComponentType?: never;
    accessibilityTraits?: never;
    href?: string;
    hrefAttrs?: {
      rel: 'noreferrer';
      target?: '_blank';
    };
  }
  interface ViewProps {
    accessibilityRole?: string;
    href?: string;
    hrefAttrs?: {
      rel: 'noreferrer';
      target?: '_blank';
    };
    onClick?: (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  }
}
