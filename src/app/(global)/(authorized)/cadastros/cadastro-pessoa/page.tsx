'use client';

import React from 'react';
import { PersonRegistrationForm } from '@/components/forms/personRegistrationForm';
import Icon from '@ant-design/icons';
import { BiHome, BiUser, BiUserPlus } from 'react-icons/bi';
import { Breadcrumb } from 'antd';

const breadcrumbItems = [
  {
    title: (
      <>
        <Icon>
          <BiHome />
        </Icon>
        <span>Home</span>
      </>
    ),
    href: '/',
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
      <>
        <Icon>
          <BiUser />
        </Icon>
        <span>Cadastro de Pessoa</span>
      </>
    ),
    href: '/cadastros/cadastro-pessoa',
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
