'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  HOME_PATH,
  PERSON_REGISTRATION_PATH,
} from '@/constants/nav/PAGE_PATHS';
import Icon from '@ant-design/icons';
import {
  BiFileBlank,
  BiHome,
  BiListCheck,
  BiUser,
  BiUserPlus,
} from 'react-icons/bi';
import { Breadcrumb, Flex, Steps, Typography } from 'antd';
import PersonAccreditationForm from '@/components/forms/personAccreditationForm';

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
        Credenciamento
      </>
    ),
  },
  {
    title: (
      <Link href={PERSON_REGISTRATION_PATH}>
        <Icon className={'me-1'}>
          <BiUser />
        </Icon>
        Credenciar Pessoa
      </Link>
    ),
  },
];

export default function PersonAccreditationPage() {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  return (
    <Flex vertical gap={'0.5rem'}>
      <Breadcrumb items={breadcrumbItems} />
      <Flex vertical>
        <Typography.Title level={4}>Credenciar Pessoa</Typography.Title>
        <Typography.Text type="secondary">
          Comece seu processo de credenciamento cadastrando pessoas, entidades e
          veículos.
        </Typography.Text>
      </Flex>
      <Steps
        type="navigation"
        size="small"
        current={current}
        onChange={onChange}
        items={[
          {
            title: 'Informações Básicas',
            status: current == 0 ? 'process' : 'wait',
            icon: (
              <Icon>
                <BiListCheck />
              </Icon>
            ),
          },
          {
            title: 'Documentação',
            status: current == 1 ? 'process' : 'wait',
            icon: (
              <Icon>
                <BiFileBlank />
              </Icon>
            ),
          },
        ]}
      />
      <div style={{ display: current === 0 ? 'block' : 'none' }}>
        <PersonAccreditationForm />
      </div>
      <div style={{ display: current === 1 ? 'block' : 'none' }}>
        <h1>Documentação</h1>
      </div>
    </Flex>
  );
}
