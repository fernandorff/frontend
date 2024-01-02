import { Flex, Image, Layout, Menu, MenuProps } from 'antd';
import {
  BiBriefcase,
  BiHome,
  BiIdCard,
  BiTable,
  BiTrendingUp,
  BiUserPlus,
} from 'react-icons/bi';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@ant-design/icons';

const menuItems: MenuProps['items'] = [
  {
    key: 'home',
    icon: (
      <Icon>
        <BiHome />
      </Icon>
    ),
    label: <Link href="/">Home</Link>,
  },
  {
    key: 'cadastros',
    icon: (
      <Icon>
        <BiUserPlus />
      </Icon>
    ),
    label: 'Cadastros',
    children: [
      {
        key: 'cadastro-pessoa',
        label: <Link href="/cadastros/cadastro-pessoa">Cadastrar Pessoa</Link>,
      },
      {
        key: 'cadastro-entidade',
        label: (
          <Link href="/cadastros/cadastro-entidade">Cadastrar Entidade</Link>
        ),
      },
      {
        key: 'cadastro-veiculo',
        label: (
          <Link href="/cadastros/cadastro-veiculo">Cadastrar Veículo</Link>
        ),
      },
    ],
  },
  {
    key: 'profissionais',
    icon: (
      <Icon>
        <BiBriefcase />
      </Icon>
    ),
    label: 'Profissionais',
    children: [
      {
        key: 'associar-profissionais',
        label: (
          <Link href="/profissionais/associar-profissionais">
            Associar Profissionais
          </Link>
        ),
      },
    ],
  },
  {
    key: 'credenciamento',
    icon: (
      <Icon>
        <BiIdCard />
      </Icon>
    ),
    label: 'Credenciamento',
    children: [
      {
        key: 'credenciar-pessoa',
        label: (
          <Link href="/credenciamento/credenciar-pessoa">
            Credenciar Pessoa
          </Link>
        ),
      },
      {
        key: 'credenciar-entidade',
        label: (
          <Link href="/credenciamento/credenciar-entidade">
            Credenciar Entidade
          </Link>
        ),
      },
    ],
  },
  {
    key: 'solicitacoes',
    icon: (
      <Icon>
        <BiTable />
      </Icon>
    ),
    label: 'Solicitações',
    children: [
      {
        key: 'listar-solicitacoes',
        label: (
          <Link href="/solicitacoes/listar-solicitacoes">
            Listar Solicitações
          </Link>
        ),
      },
    ],
  },
  {
    key: 'relatorios',
    icon: (
      <Icon>
        <BiTrendingUp />
      </Icon>
    ),
    label: 'Relatórios',
    children: [
      {
        key: 'listar-relatorios',
        label: (
          <Link href="/relatorios/historico-solicitacoes">
            Histórico de Solicitações
          </Link>
        ),
      },
    ],
  },
];

export default function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout.Sider
        theme={'light'}
        width={'15rem'}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Flex justify={'center'}>
          <Image
            width={'8rem'}
            preview={false}
            src={collapsed ? '/detran-es-logo-min.svg' : '/detran-es-logo.svg'}
            className={collapsed ? 'p-4' : 'p-2'}
          />
        </Flex>
        <Menu mode="inline" items={menuItems} />
      </Layout.Sider>
    </>
  );
}
