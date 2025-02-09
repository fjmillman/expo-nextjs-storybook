'use client';

import type { ViewProps } from 'react-native';
import { View } from 'react-native';

export const Row = ({ className, ...props }: ViewProps) => (
  <View className={`flex-row ${className}`} {...props} />
);
