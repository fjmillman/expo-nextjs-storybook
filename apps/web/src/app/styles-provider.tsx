'use client';

import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { useServerInsertedHTML } from 'next/navigation';

const StylesProvider = ({ children }: PropsWithChildren) => {
  useServerInsertedHTML(() => {
    const sheet = StyleSheet.getSheet();

    return (
      <style
        dangerouslySetInnerHTML={{ __html: sheet.textContent }}
        id={sheet.id}
      />
    );
  });

  return <>{children}</>;
};

export default StylesProvider;
