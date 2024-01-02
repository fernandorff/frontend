import { Avatar, Button, Dropdown, Flex, Menu, Typography } from 'antd';
import Icon from '@ant-design/icons';
import { BiCog, BiLogOut, BiUser } from 'react-icons/bi';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function LoggedUserDropdown() {
  const router = useRouter();

  function handleMenuClickNavigation(e: any) {
    router.push(e.key);
  }

  return (
    <>
      <Dropdown
        overlay={
          <Menu onClick={handleMenuClickNavigation} mode={'inline'}>
            <Menu.Item
              key="meu-perfil"
              icon={
                <Icon>
                  <BiUser />
                </Icon>
              }
            >
              Meu Perfil
            </Menu.Item>
            <Menu.Item
              key="configuracoes-conta"
              icon={
                <Icon>
                  <BiCog />
                </Icon>
              }
            >
              Configurações da conta
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              key={'logout'}
              icon={
                <Icon>
                  <BiLogOut />
                </Icon>
              }
              danger
            >
              Sair
            </Menu.Item>
          </Menu>
        }
      >
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
