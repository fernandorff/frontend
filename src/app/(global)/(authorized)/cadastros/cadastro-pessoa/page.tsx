'use client';

import React from 'react';
import { PersonRegistrationForm } from '@/components/forms/personRegistrationForm';
import Icon from '@ant-design/icons';
import { BiHome, BiUser, BiUserPlus } from 'react-icons/bi';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

const breadcrumbItems = [
  {
    title: (
      <Link href={'/'}>
        <Icon>
          <BiHome />
        </Icon>
        <span>Home</span>
      </Link>
    ),
  },
  {
    title: (
      <>
        <Icon>
          <BiUserPlus />
        </Icon>
        <span>Cadastros</span>
      </>
    ),
  },
  {
    title: (
      <Link href={'/cadastros/cadastro-pessoa'}>
        <Icon>
          <BiUser />
        </Icon>
        <span>Cadastro de Pessoa</span>
      </Link>
    ),
  },
];

export default function PersonRegistrationPage() {
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <PersonRegistrationForm />
    </>
  );
}
