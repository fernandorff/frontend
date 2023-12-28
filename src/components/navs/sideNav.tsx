import { Flex, Image, Menu } from 'antd';
import {
  BiBriefcase,
  BiHome,
  BiTable,
  BiTrendingUp,
  BiUserPlus,
} from 'react-icons/bi';

export function SideNav() {
  return (
    <>
      <Flex justify={'center'}>
        <Image
          width={'8rem'}
          preview={false}
          src={'detran-es-logo.svg'}
          className={'p-2'}
        />
      </Flex>
      <Menu mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item icon={<BiHome />} key="1">
          Home
        </Menu.Item>

        <Menu.SubMenu icon={<BiUserPlus />} title="Cadastros">
          <Menu.Item>Cadastrar Pessoa</Menu.Item>
          <Menu.Item>Cadastrar Entidade</Menu.Item>
          <Menu.Item>Cadastrar Veículo</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu icon={<BiBriefcase />} title="Profissionais">
          <Menu.Item>Associar Profissionais</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu icon={<BiTable />} title="Solicitações">
          <Menu.Item key="listRequests">Listar Solicitações</Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu icon={<BiTrendingUp />} title="Relatórios">
          <Menu.Item key="listReports">Listar Relatórios</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </>
  );
}
