import React from 'react';
import { Badge, Button, Flex, Image, Typography } from 'antd';
import { AiOutlineMenuFold } from 'react-icons/ai';
import {
  BellOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import LoggedUserDropdown from '@/components/dropdowns/loggedUserDropdown';

export default function TopNav() {
  return (
    <>
      <Flex justify={'space-between'} align={'center'}>
        <Flex align={'center'} gap={'1.5rem'}>
          <Button
            type="text"
            icon={<AiOutlineMenuFold size={'1.5rem'} color={'white'} />}
          />

          <Image width={'8rem'} preview={false} src={'gov-es-logo.svg'} />
          <Typography className={'text-xl text-white font-semibold'}>
            Página atual
          </Typography>
        </Flex>

        <Flex align={'center'} gap={'1rem'}>
          <Button
            shape={'circle'}
            type="text"
            size={'large'}
            icon={<SearchOutlined style={{ color: 'white' }} />}
          />
          <Button
            type="text"
            shape={'circle'}
            size={'large'}
            icon={<QuestionCircleOutlined style={{ color: 'white' }} />}
          />
          <Badge count={13} offset={[-6, 6]}>
            <Button
              type="text"
              shape={'circle'}
              size={'large'}
              icon={<BellOutlined style={{ color: 'white' }} />}
            />
          </Badge>
          <LoggedUserDropdown />
        </Flex>
      </Flex>
    </>
  );
}
