import { Flex, Image, Layout, Menu } from 'antd';
import {
  BiBriefcase,
  BiHome,
  BiTable,
  BiTrendingUp,
  BiUserPlus,
} from 'react-icons/bi';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@ant-design/icons';

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
        <Menu mode="inline">
          <Menu.Item
            icon={
              <Icon>
                <BiHome />
              </Icon>
            }
          >
            <Link href="/">Home</Link>
          </Menu.Item>

          <Menu.SubMenu
            icon={
              <Icon>
                <BiUserPlus />
              </Icon>
            }
            title="Cadastros"
          >
            <Menu.Item>
              <Link href="/cadastros/cadastro-pessoa">Cadastrar Pessoa</Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/cadastros/cadastro-entidade">
                Cadastrar Entidade
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link href="/cadastros/cadastro-veiculo">Cadastrar Veículo</Link>
            </Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            icon={
              <Icon>
                <BiBriefcase />
              </Icon>
            }
            title="Profissionais"
          >
            <Menu.Item>Associar Profissionais</Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            icon={
              <Icon>
                <BiTable />
              </Icon>
            }
            title="Solicitações"
          >
            <Menu.Item key="listRequests">Listar Solicitações</Menu.Item>
          </Menu.SubMenu>

          <Menu.SubMenu
            icon={
              <Icon>
                <BiTrendingUp />
              </Icon>
            }
            title="Relatórios"
          >
            <Menu.Item key="listReports">Listar Relatórios</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
    </>
  );
}
