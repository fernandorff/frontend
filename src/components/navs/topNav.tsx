import React from 'react';
import { Badge, Button, Flex, Image, Layout } from 'antd';
import { AiOutlineMenuFold } from 'react-icons/ai';
import Icon from '@ant-design/icons';
import LoggedUserDropdown from '@/components/dropdowns/loggedUserDropdown';
import { BiBell, BiQuestionMark, BiSearch } from 'react-icons/bi';
import Link from 'next/link';
import { HOME_PATH } from '@/constants/paths/PAGE_PATHS';

export default function TopNav() {
  return (
    <>
      <Layout.Header>
        <Flex justify={'space-between'} align={'center'}>
          <Flex align={'center'} gap={'1.5rem'}>
            <Button
              type="text"
              icon={<AiOutlineMenuFold size={'1.5rem'} color={'white'} />}
            />

            <Link href={HOME_PATH}>
              <Image width={'8rem'} preview={false} src={'/gov-es-logo.svg'} />
            </Link>
          </Flex>

          <Flex align={'center'} gap={'1rem'}>
            <Button
              shape={'circle'}
              type="text"
              size={'large'}
              icon={
                <Icon>
                  <BiSearch style={{ color: 'white' }} />
                </Icon>
              }
            />
            <Button
              type="text"
              shape={'circle'}
              size={'large'}
              icon={
                <Icon>
                  <BiQuestionMark style={{ color: 'white' }} />
                </Icon>
              }
            />
            <Badge count={13} offset={[-6, 6]}>
              <Button
                type="text"
                shape={'circle'}
                size={'large'}
                icon={
                  <Icon>
                    <BiBell style={{ color: 'white' }} />
                  </Icon>
                }
              />
            </Badge>
            <LoggedUserDropdown />
          </Flex>
        </Flex>
      </Layout.Header>
    </>
  );
}
