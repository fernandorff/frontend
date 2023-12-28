'use client';

import { ReduxProvider } from '@/services/providers/reduxProvider';
import { ReactQueryProvider } from '@/services/providers/reactQueryProvider';
import React from 'react';
import { ConfigProvider } from 'antd';
import ptBr from 'antd/lib/locale/pt_BR';

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReduxProvider>
      <ConfigProvider locale={ptBr}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ConfigProvider>
    </ReduxProvider>
  );
};
