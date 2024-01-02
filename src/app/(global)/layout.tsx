'use client';

import React from 'react';
import { Layout } from 'antd';
import TopNav from '@/components/navs/topNav';
import SideNav from '@/components/navs/sideNav';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <TopNav />
      <Layout>
        <SideNav />
        <Layout.Content className={'p-4'}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
}
