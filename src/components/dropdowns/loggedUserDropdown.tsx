import { Avatar, Button, Dropdown, Menu, Space, Typography } from 'antd';
import { DownOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { BiLogOut } from 'react-icons/bi';
import React from 'react';

export default function LoggedUserDropdown() {
  function handleMenuClick(e: any) {
    console.log('click', e);
  }

  return (
    <>
      <Dropdown
        overlay={
          <Menu onClick={handleMenuClick} defaultSelectedKeys={['profile']}>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              Meu Perfil
            </Menu.Item>
            <Menu.Item icon={<SettingOutlined />}>
              Configurações da conta
            </Menu.Item>
            <Menu.Item icon={<BiLogOut />} danger>
              Sair
            </Menu.Item>
          </Menu>
        }
      >
        <Button size={'large'} type={'text'} className={'h-16'}>
          <Space>
            <Avatar
              size={'default'}
              className={'cursor-pointer'}
              shape={'circle'}
              src={'avatar-template.svg'}
            />
            <Typography.Text className={'text-white'}>
              Deltrano Santos
            </Typography.Text>
            <DownOutlined className={'text-white text-xm '} />
          </Space>
        </Button>
      </Dropdown>
    </>
  );
}
