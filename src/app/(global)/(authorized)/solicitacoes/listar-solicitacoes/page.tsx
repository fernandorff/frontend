'use client';

import Link from 'next/link';
import React from 'react';
import Icon from '@ant-design/icons';
import { BiHome, BiUser, BiUserPlus } from 'react-icons/bi';
import { Breadcrumb, Flex, Tabs, TabsProps, Typography } from 'antd';
import { HOME_PATH, LIST_REQUESTS_PATH } from '@/constants/nav/PAGE_PATHS';
import AccreditationRequestInDocumentAnalysisTable from '@/components/tables/accreditationRequestInDocumentAnalysisTable';
import EntityRegistrationForm from '@/components/forms/entityRegistrationForm';

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

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Em análise documental',
    children: <AccreditationRequestInDocumentAnalysisTable />,
  },
  {
    key: '2',
    label: 'Aguardando pagamento',
    children: <h1>Aguardando Pagamento</h1>,
  },
];

export default function ListRequestsPage() {
  return (
    <Flex vertical gap={'0.5rem'}>
      <Breadcrumb items={breadcrumbItems} />
      <Typography.Title level={4}>
        Solicitações de credenciamento
      </Typography.Title>
      <Typography.Text type="secondary">
        Acompanhe os processos de solicitação de credenciamento.
      </Typography.Text>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </Flex>
  );
}
