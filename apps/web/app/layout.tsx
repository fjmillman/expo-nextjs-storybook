import 'raf/polyfill';
import 'setimmediate';

import { Provider } from 'app/provider';
import { Metadata } from 'next';
import { ReactNode } from 'react';

import StylesProvider from './styles-provider';

import './global.css';

export const metadata: Metadata = {
  title: 'Allergenie',
  icons: '/favicon.ico',
};

type Props = {
  children: ReactNode;
};

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
