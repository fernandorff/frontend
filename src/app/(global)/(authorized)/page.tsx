'use client';

import React from 'react';
import { Button, Space, Typography } from 'antd';
import { BiCar, BiStore, BiUser } from 'react-icons/bi';
import Icon from '@ant-design/icons';

export default function HomePage() {
  return (
    <>
      <Typography.Title level={4}>Bem vindo ao Detran ES</Typography.Title>
      <Typography.Paragraph>
        Inicie seu processo de credenciamento cadastrando pessoas, entidades e
        veículos.
      </Typography.Paragraph>
      <Space>
        <Button
          href={'/cadastros/cadastro-entidade'}
          size={'large'}
          icon={
            <Icon>
              <BiStore />
            </Icon>
          }
        >
          Cadastrar Entidade
        </Button>
        <Button
          href={'/cadastros/cadastro-pessoa'}
          size={'large'}
          icon={
            <Icon>
              <BiUser />
            </Icon>
          }
        >
          Cadastrar Pessoa
        </Button>
        <Button
          href={'/cadastros/cadastro-veiculo'}
          size={'large'}
          icon={
            <Icon>
              <BiCar />
            </Icon>
          }
        >
          Cadastrar Veículo
        </Button>
      </Space>
    </>
  );
}
