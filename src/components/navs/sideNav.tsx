import { Flex, Image, Layout, Menu, MenuProps } from 'antd';
import {
  BiBriefcase,
  BiHome,
  BiIdCard,
  BiTable,
  BiTrendingUp,
  BiUserPlus,
} from 'react-icons/bi';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Icon from '@ant-design/icons';
import { usePathname } from 'next/navigation';
import {
  ACCREDITATION_PATH,
  ASSOCIATE_PROFESSIONALS_PATH,
  ENTITY_ACCREDITATION_PATH,
  ENTITY_REGISTRATION_PATH,
  HOME_PATH,
  LIST_REQUESTS_PATH,
  PERSON_ACCREDITATION_PATH,
  PERSON_REGISTRATION_PATH,
  PROFESSIONALS_PATH,
  REGISTRATIONS_PATH,
  REPORTS_PATH,
  REQUESTS_HISTORY_PATH,
  REQUESTS_PATH,
  VEHICLE_REGISTRATION_PATH,
} from '@/constants/paths/PAGE_PATHS';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/services/state/redux/store/store';
import {
  setSideNavStateCollapsed,
  toggleSideNavCollapsed,
} from '@/services/state/redux/store/reducers/sideNavSlice';
import { SMALL, useScreenSize } from '@/hooks/layout/useScreenSize';

const menuItems: MenuProps['items'] = [
  {
    key: HOME_PATH,
    icon: (
      <Icon>
        <BiHome />
      </Icon>
    ),
    label: <Link href={HOME_PATH}>Home</Link>,
  },
  {
    key: REGISTRATIONS_PATH,
    icon: (
      <Icon>
        <BiUserPlus />
      </Icon>
    ),
    label: 'Cadastros',
    children: [
      {
        key: PERSON_REGISTRATION_PATH,
        label: <Link href={PERSON_REGISTRATION_PATH}>Cadastrar Pessoa</Link>,
      },
      {
        key: ENTITY_REGISTRATION_PATH,
        label: <Link href={ENTITY_REGISTRATION_PATH}>Cadastrar Entidade</Link>,
      },
      {
        key: VEHICLE_REGISTRATION_PATH,
        label: <Link href={VEHICLE_REGISTRATION_PATH}>Cadastrar Veículo</Link>,
      },
    ],
  },
  {
    key: PROFESSIONALS_PATH,
    icon: (
      <Icon>
        <BiBriefcase />
      </Icon>
    ),
    label: 'Profissionais',
    children: [
      {
        key: ASSOCIATE_PROFESSIONALS_PATH,
        label: (
          <Link href={ASSOCIATE_PROFESSIONALS_PATH}>
            Associar Profissionais
          </Link>
        ),
      },
    ],
  },
  {
    key: ACCREDITATION_PATH,
    icon: (
      <Icon>
        <BiIdCard />
      </Icon>
    ),
    label: 'Credenciamento',
    children: [
      {
        key: PERSON_ACCREDITATION_PATH,
        label: <Link href={PERSON_ACCREDITATION_PATH}>Credenciar Pessoa</Link>,
      },
      {
        key: ENTITY_ACCREDITATION_PATH,
        label: (
          <Link href={ENTITY_ACCREDITATION_PATH}>Credenciar Entidade</Link>
        ),
      },
    ],
  },
  {
    key: REQUESTS_PATH,
    icon: (
      <Icon>
        <BiTable />
      </Icon>
    ),
    label: 'Solicitações',
    children: [
      {
        key: LIST_REQUESTS_PATH,
        label: <Link href={LIST_REQUESTS_PATH}>Listar Solicitações</Link>,
      },
    ],
  },
  {
    key: REPORTS_PATH,
    icon: (
      <Icon>
        <BiTrendingUp />
      </Icon>
    ),
    label: 'Relatórios',
    children: [
      {
        key: REQUESTS_HISTORY_PATH,
        label: (
          <Link href={REQUESTS_HISTORY_PATH}>Histórico de Solicitações</Link>
        ),
      },
    ],
  },
];

export default function SideNav() {
  const screenSize = useScreenSize();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isCollapsed = useSelector(
    (state: RootState) => state.sideNav.isCollapsed,
  );

  useEffect(() => {
    if (screenSize == SMALL) {
      dispatch(setSideNavStateCollapsed(true));
    }
  }, [pathname]);

  return (
    <>
      <Layout.Sider
        theme={'light'}
        width={screenSize == SMALL ? '100%' : '15rem'}
        collapsible
        collapsedWidth={0}
        collapsed={isCollapsed}
        trigger={null}
        onCollapse={() => dispatch(toggleSideNavCollapsed())}
      >
        <Flex justify={'center'}>
          <Image
            width={'8rem'}
            preview={false}
            src={'/detran-es-logo.svg'}
            className={'p-2'}
          />
        </Flex>
        <Menu mode="inline" items={menuItems} selectedKeys={[pathname]} />
      </Layout.Sider>
    </>
  );
}
