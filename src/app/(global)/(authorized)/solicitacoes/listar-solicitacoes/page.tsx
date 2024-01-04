'use client';

import Link from 'next/link';
import React from 'react';
import Icon from '@ant-design/icons';
import { BiHome, BiUser, BiUserPlus } from 'react-icons/bi';
import { Breadcrumb, Typography } from 'antd';
import { HOME_PATH, LIST_REQUESTS_PATH } from '@/constants/nav/PAGE_PATHS';

const breadcrumbItems = [
  {
    title: (
      <Link href={HOME_PATH}>
        <Icon className={'me-1'}>
          <BiHome />
        </Icon>
        Home
      </Link>
    ),
  },
  {
    title: (
      <>
        <Icon className={'me-1'}>
          <BiUserPlus />
        </Icon>
        Solicitações
      </>
    ),
  },
  {
    title: (
      <Link href={LIST_REQUESTS_PATH}>
        <Icon className={'me-1'}>
          <BiUser />
        </Icon>
        Listar Solicitações
      </Link>
    ),
  },
];

export default function ListRequestsPage() {
  return (
    <>
      <Breadcrumb className={'mb-4'} items={breadcrumbItems} />
      <Typography.Title level={4}>
        Solicitações de credenciamento
      </Typography.Title>
      <Typography.Text className={'mb-6'} type="secondary">
        Acompanhe os processos de solicitação de credenciamento.
      </Typography.Text>
    </>
  );
}
