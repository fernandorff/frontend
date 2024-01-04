'use client';

import React from 'react';
import { Button, Flex, Space, Typography } from 'antd';
import { BiCar, BiStore, BiUser } from 'react-icons/bi';
import Icon from '@ant-design/icons';
import Link from 'next/link';
import {
  ENTITY_REGISTRATION_PATH,
  PERSON_REGISTRATION_PATH,
  VEHICLE_REGISTRATION_PATH,
} from '@/constants/paths/PAGE_PATHS';

export default function HomePage() {
  return (
    <>
      <Flex vertical gap={'0.5rem'}>
        <Typography.Title level={4}>Bem vindo ao Detran ES</Typography.Title>
        <Typography.Text>
          Inicie seu processo de credenciamento cadastrando pessoas, entidades e
          veículos.
        </Typography.Text>

        <Space wrap>
          <Link href={ENTITY_REGISTRATION_PATH}>
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
          <Link href={PERSON_REGISTRATION_PATH}>
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
          <Link href={VEHICLE_REGISTRATION_PATH}>
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
      </Flex>
    </>
  );
}
