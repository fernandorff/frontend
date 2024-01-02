'use client';

import React from 'react';
import { PersonRegistrationForm } from '@/components/forms/personRegistrationForm';
import Breadcrumbs from '@/components/breadcrumbs/breadcrumbs';
import Icon from '@ant-design/icons';
import { BiHome, BiUser, BiUserPlus } from 'react-icons/bi';

const breadcrumbItems = [
  {
    name: 'Home',
    href: '/',
    icon: (
      <Icon>
        <BiHome />
      </Icon>
    ),
  },
  {
    name: 'Cadastros',
    href: '/cadastros',
    icon: (
      <Icon>
        <BiUserPlus />
      </Icon>
    ),
  },
  {
    name: 'Cadastro de Pessoa',
    href: '/cadastros/cadastro-pessoa',
    icon: (
      <Icon>
        <BiUser />
      </Icon>
    ),
  },
];

export default function PersonRegistrationPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <PersonRegistrationForm />
    </>
  );
}
