'use client';

import React from 'react';
import { Button, Space, Typography } from 'antd';
import { BiCar, BiStore, BiUser } from 'react-icons/bi';
import Icon from '@ant-design/icons';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Typography.Title level={4}>Bem vindo ao Detran ES</Typography.Title>
      <Typography.Paragraph>
        Inicie seu processo de credenciamento cadastrando pessoas, entidades e
        veículos.
      </Typography.Paragraph>

      <Space>
        <Link href={'/cadastros/cadastro-entidade'}>
          <Button
            size={'large'}
            icon={
              <Icon>
                <BiStore />
              </Icon>
            }
          >
            Cadastrar Entidade
          </Button>
        </Link>
        <Link href={'/cadastros/cadastro-pessoa'}>
          <Button
            size={'large'}
            icon={
              <Icon>
                <BiUser />
              </Icon>
            }
          >
            Cadastrar Pessoa
          </Button>
        </Link>
        <Link href={'/cadastros/cadastro-veiculo'}>
          <Button
            size={'large'}
            icon={
              <Icon>
                <BiCar />
              </Icon>
            }
          >
            Cadastrar Veículo
          </Button>
        </Link>
      </Space>
    </>
  );
}
