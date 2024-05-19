'use client';
import { View, ViewProps } from 'react-native';

export const Row = ({ className, ...props }: ViewProps) => (
  <View className={`flex-row ${className}`} {...props} />
);
