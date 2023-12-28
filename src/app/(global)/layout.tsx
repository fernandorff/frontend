'use client';

import React, { useState } from 'react';
import { Layout } from 'antd';
import { SideNav } from '@/components/navs/sideNav';
import TopNav from '@/components/navs/topNav';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header>
        <TopNav />
      </Layout.Header>
      <Layout>
        <Layout.Sider
          theme={'light'}
          width={'15rem'}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <SideNav />
        </Layout.Sider>
        <Layout.Content className={'p-4'}>
          <Breadcrumbs />
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
