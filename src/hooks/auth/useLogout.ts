import { useRouter } from 'next/navigation';
import { useLocalStorage } from '@/hooks/local-storage/useLocalStorage';

export const useLogout = () => {
  const router = useRouter();
  const { remove } = useLocalStorage();

  return {
    logoutFn: () => {
      remove('accessToken');
      router.push('/login');
    },
  };
};
