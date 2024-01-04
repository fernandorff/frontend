'use client';

import React from 'react';
import { PersonAccreditationForm } from '@/components/forms/personAccreditationForm';
import Link from 'next/link';
import {
  HOME_PATH,
  PERSON_REGISTRATION_PATH,
} from '@/constants/paths/PAGE_PATHS';
import Icon from '@ant-design/icons';
import { BiHome, BiUser, BiUserPlus } from 'react-icons/bi';
import { Breadcrumb, Typography } from 'antd';

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
  return (
    <>
      <Breadcrumb className={'mb-4'} items={breadcrumbItems} />
      <Typography.Title level={4}>Credenciar Pessoa</Typography.Title>
      <Typography.Paragraph className={'mb-6'}>
        Comece seu processo de credenciamento cadastrando pessoas, entidades e
        veículos.
      </Typography.Paragraph>
      <PersonAccreditationForm />
    </>
  );
}
