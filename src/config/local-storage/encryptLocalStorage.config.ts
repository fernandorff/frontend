import { EncryptStorage } from 'encrypt-storage';
import { NEXT_PUBLIC_ENCRYPT_KEY } from '@/constants/env/environmentVariables';

export const encryptLocalStorage = new EncryptStorage(
  NEXT_PUBLIC_ENCRYPT_KEY!.toString(),
  {
    storageType: 'localStorage',
  },
);
