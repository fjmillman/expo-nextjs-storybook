'use client';

import type { PropsWithChildren } from 'react';

import { SafeArea } from './safe-area';

export function Provider({ children }: PropsWithChildren) {
  return <SafeArea>{children}</SafeArea>;
}
