import 'raf/polyfill';
import 'setimmediate';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Provider } from '@/ui/provider';

import StylesProvider from './styles-provider';

import '~/styles.css';

export const metadata: Metadata = {
  title: 'Allergenie',
  icons: '/favicon.ico',
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body>
      <StylesProvider>
        <Provider>{children}</Provider>
      </StylesProvider>
    </body>
  </html>
);

export default RootLayout;
