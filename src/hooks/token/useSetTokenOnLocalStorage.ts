import { changeToken } from '@/services/state/redux/store/reducers/tokenSlice';
import { useLocalStorage } from '@/hooks/local-storage/useLocalStorage';
import { useAppDispatch } from '@/hooks/useAppDispatch';

interface UseSetTokenOnLocalStorageReturn {
  setTokenOnLocalStorage: (token: string) => void;
}

export const useSetTokenOnLocalStorage =
  (): UseSetTokenOnLocalStorageReturn => {
    const dispatch = useAppDispatch();
    const { set } = useLocalStorage();

    return {
      setTokenOnLocalStorage: (token: string) => {
        set('accessToken', token);
        dispatch(changeToken(token));
      },
    };
  };
