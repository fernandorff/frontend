import { changeToken } from '@/services/state/redux/store/reducers/tokenSlice';
import { useLocalStorageToken } from '@/hooks/token/useLocalStorageToken';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppDispatch';

export const useToken = () => {
  const dispatch = useAppDispatch();
  const selectedToken = useAppSelector((state) => state.token.value);
  const token = useLocalStorageToken();

  if (selectedToken) return selectedToken;

  if (token) {
    dispatch(changeToken(token));
  }

  return selectedToken;
};
