import Icon, { HomeOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Breadcrumb, Flex } from 'antd';
import { BiUserPlus } from 'react-icons/bi';

export default function Breadcrumbs() {
  return (
    <>
      <Breadcrumb className={'mb-4'}>
        <Breadcrumb.Item href="" key="home">
          <HomeOutlined /> Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="" key="appList">
          <Flex gap={'0.25rem'}>
            <Icon className={'text-xl'}>
              <BiUserPlus />
            </Icon>
            Cadastros
          </Flex>
        </Breadcrumb.Item>
        <Breadcrumb.Item key="app">
          <UserOutlined /> Cadastro de Pessoa
        </Breadcrumb.Item>
      </Breadcrumb>
    </>
  );
}
