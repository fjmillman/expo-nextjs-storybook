import { Stack } from 'expo-router';

import { Provider } from '@/ui/provider';

import '~/styles.css';

export default function Root() {
  return (
    <Provider>
      <Stack />
    </Provider>
  );
}
