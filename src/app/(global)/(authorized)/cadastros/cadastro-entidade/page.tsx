'use client';

import React from 'react';
import { Breadcrumb, Typography } from 'antd';
import Link from 'next/link';
import Icon from '@ant-design/icons';
import { BiHome, BiUser, BiUserPlus } from 'react-icons/bi';
import { EntityRegistrationForm } from '@/components/forms/entityRegistrationForm';
import {
  ENTITY_REGISTRATION_PATH,
  HOME_PATH,
} from '@/constants/paths/PAGE_PATHS';

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
        Cadastros
      </>
    ),
  },
  {
    title: (
      <Link href={ENTITY_REGISTRATION_PATH}>
        <Icon className={'me-1'}>
          <BiUser />
        </Icon>
        Cadastrar Entidade
      </Link>
    ),
  },
];

export default function EntityRegistrationPage() {
  return (
    <>
      <Breadcrumb className={'mb-4'} items={breadcrumbItems} />
      <Typography.Title className={'mb-6'} level={4}>
        Cadastro de entidade
      </Typography.Title>
      <EntityRegistrationForm />
    </>
  );
}
