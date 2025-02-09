'use client';

import { Text, View } from 'react-native';
import { TextLink } from 'solito/link';
import { useParams } from 'solito/navigation';

const useUserParams = useParams<{ id: string }>;

export function UserDetailScreen() {
  const { id } = useUserParams();

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-4 text-center font-bold">{`User ID: ${id}`}</Text>
      <TextLink
        className="text-base font-bold text-blue-500 hover:underline"
        href="/"
      >
        👈 Go Home
      </TextLink>
    </View>
  );
}
