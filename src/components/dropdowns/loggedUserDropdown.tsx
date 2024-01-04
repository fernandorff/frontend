import { Avatar, Button, Dropdown, Flex, MenuProps, Typography } from 'antd';
import React from 'react';
import { usePathname } from 'next/navigation';
import Icon from '@ant-design/icons';
import { BiCog, BiLogOut, BiUser } from 'react-icons/bi';
import Link from 'next/link';
import {
  ACCOUNT_SETTINGS_PATH,
  LOGOUT_PATH,
  MY_PROFILE_PATH,
} from '@/constants/nav/PAGE_PATHS';
import { useScreenSize } from '@/hooks/layout/useScreenSize';

const items: MenuProps['items'] = [
  {
    key: MY_PROFILE_PATH,
    icon: (
      <Icon>
        <BiUser />
      </Icon>
    ),
    label: <Link href={MY_PROFILE_PATH}>Meu Perfil</Link>,
  },
  {
    key: ACCOUNT_SETTINGS_PATH,
    icon: (
      <Icon>
        <BiCog />
      </Icon>
    ),
    label: <Link href={ACCOUNT_SETTINGS_PATH}>Configurações da conta</Link>,
  },
  {
    type: 'divider',
  },
  {
    key: LOGOUT_PATH,
    icon: (
      <Icon>
        <BiLogOut />
      </Icon>
    ),
    label: <Link href={LOGOUT_PATH}>Logout</Link>,
    danger: true,
  },
];

export default function LoggedUserDropdown() {
  const pathname = usePathname();
  const screenSize = useScreenSize();

  return (
    <>
      <Dropdown
        menu={{ items, selectable: true, selectedKeys: [pathname] }}
        placement={'bottomLeft'}
      >
        <Button size={'large'} type={'text'} className={'h-16'}>
          <Flex align={'center'} gap={'0.5rem'}>
            <Avatar
              size={'default'}
              className={'cursor-pointer'}
              shape={'circle'}
              src={'/user-avatar-mockup.svg'}
            />
            {screenSize !== 'small' && (
              <Typography.Text className={'text-white'}>
                Deltrano Santos
              </Typography.Text>
            )}
          </Flex>
        </Button>
      </Dropdown>
    </>
  );
}
