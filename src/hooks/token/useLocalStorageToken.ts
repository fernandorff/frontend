import { isClientSide } from '@/constants/isClientSide';
import { useLocalStorage } from '@/hooks/local-storage/useLocalStorage';

export const useLocalStorageToken = (): string | null => {
  const { get } = useLocalStorage();
  const token = get<string | null>('accessToken');

  if (isClientSide) {
    return token ? JSON.parse(token) : null;
  }

  return null;
};
