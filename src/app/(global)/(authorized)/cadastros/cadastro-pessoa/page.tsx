'use client';

import React from 'react';
import Icon from '@ant-design/icons';
import { BiHome, BiUser, BiUserPlus } from 'react-icons/bi';
import { Breadcrumb, Flex, Typography } from 'antd';
import Link from 'next/link';
import {
  HOME_PATH,
  PERSON_REGISTRATION_PATH,
} from '@/constants/nav/PAGE_PATHS';
import PersonRegistrationForm from '@/components/forms/personRegistrationForm';

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
    <Flex vertical gap={'0.5rem'}>
      <Breadcrumb items={breadcrumbItems} />
      <Typography.Title level={4}>Cadastro de Pessoa</Typography.Title>
      <PersonRegistrationForm />
    </Flex>
  );
}
