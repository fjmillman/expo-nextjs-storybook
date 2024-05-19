'use client';
import { useServerInsertedHTML } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';

const StylesProvider = ({ children }: PropsWithChildren) => {
  useServerInsertedHTML(() => {
    // @ts-expect-error
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
