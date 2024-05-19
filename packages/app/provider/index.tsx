'use client';
import { PropsWithChildren } from 'react';

import { SafeArea } from './safe-area';

export function Provider({ children }: PropsWithChildren) {
  return <SafeArea>{children}</SafeArea>;
}
