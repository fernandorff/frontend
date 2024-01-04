'use client';

import React from 'react';
import { Layout } from 'antd';
import TopNav from '@/components/navs/topNav';
import SideNav from '@/components/navs/sideNav';
import { SMALL, useScreenSize } from '@/hooks/layout/useScreenSize';
import { useSelector } from 'react-redux';
import { RootState } from '@/services/state/redux/store/store';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const screenSize = useScreenSize();
  const isSideNavCollapsed = useSelector(
    (state: RootState) => state.sideNav.isCollapsed,
  );

  return (
    <Layout style={{ height: '100vh' }}>
      <TopNav />
      <Layout>
        <SideNav />
        <Layout.Content
          style={{
            overflow: 'auto',
            // minHeight: '0',
          }}
          className={screenSize !== SMALL || isSideNavCollapsed ? 'p-4' : ''}
        >
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
