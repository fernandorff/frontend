import { Avatar, Button, Dropdown, Flex, MenuProps, Typography } from 'antd';
import React from 'react';
import { useRouter } from 'next/navigation';
import Icon from '@ant-design/icons';
import { BiCog, BiLogOut, BiUser } from 'react-icons/bi';
import Link from 'next/link';

const items: MenuProps['items'] = [
  {
    key: 'meu-perfil',
    icon: (
      <Icon>
        <BiUser />
      </Icon>
    ),
    label: <Link href="/meu-perfil">Meu Perfil</Link>,
  },
  {
    key: 'configuracoes-conta',
    icon: (
      <Icon>
        <BiCog />
      </Icon>
    ),
    label: <Link href="/configuracoes-conta">Configurações da conta</Link>,
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    icon: (
      <Icon>
        <BiLogOut />
      </Icon>
    ),
    label: <Link href="/logout">Logout</Link>,
    danger: true,
  },
];

export default function LoggedUserDropdown() {
  const router = useRouter();

  function handleMenuClickNavigation(e: any) {
    router.push(e.key);
  }

  return (
    <>
      <Dropdown menu={{ items }}>
        <Button size={'large'} type={'text'} className={'h-16'}>
          <Flex align={'center'} gap={'0.5rem'}>
            <Avatar
              size={'default'}
              className={'cursor-pointer'}
              shape={'circle'}
              src={'/user-avatar-mockup.svg'}
            />
            <Typography.Text className={'text-white'}>
              Deltrano Santos
            </Typography.Text>
          </Flex>
        </Button>
      </Dropdown>
    </>
  );
}
