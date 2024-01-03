'use client';

import React from 'react';
import { Layout } from 'antd';
import TopNav from '@/components/navs/topNav';
import SideNav from '@/components/navs/sideNav';
import { useSelector } from 'react-redux';
import { useBreakpoint } from '@ant-design/pro-utils';
import { RootState } from '@/services/state/redux/store/store';
import { isBreakpointUp } from '@/utils/breakpointUtils';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breakpoint = useBreakpoint();
  const isSideNavCollapsed = useSelector(
    (state: RootState) => state.sideNav.isCollapsed,
  );
  const mobileMode = isSideNavCollapsed || isBreakpointUp('sm', breakpoint);

  return (
    <Layout style={{ height: '100vh' }}>
      <TopNav />
      <Layout>
        <SideNav />
        <Layout.Content
          style={{
            overflow: 'auto',
            // width: '100%',
            minHeight: '0',
          }}
          className={mobileMode ? 'p-4' : ''}
        >
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
