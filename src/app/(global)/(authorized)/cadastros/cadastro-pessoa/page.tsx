'use client';

import React from 'react';
import { PersonRegistrationForm } from '@/components/forms/personRegistrationForm';
import Icon from '@ant-design/icons';
import { BiHome, BiUser, BiUserPlus } from 'react-icons/bi';
import { Breadcrumb, Typography } from 'antd';
import Link from 'next/link';
import {
  HOME_PATH,
  PERSON_REGISTRATION_PATH,
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
      <Link href={PERSON_REGISTRATION_PATH}>
        <Icon className={'me-1'}>
          <BiUser />
        </Icon>
        Cadastro de Pessoa
      </Link>
    ),
  },
];

export default function PersonRegistrationPage() {
  return (
    <>
      <Breadcrumb className={'mb-4'} items={breadcrumbItems} />
      <Typography.Title className={'mb-6'} level={4}>
        Cadastro de Pessoa
      </Typography.Title>
      <PersonRegistrationForm />
    </>
  );
}
