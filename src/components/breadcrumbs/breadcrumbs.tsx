import React from 'react';
import { Breadcrumb, Flex } from 'antd';

interface BreadcrumbItem {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <Breadcrumb className={'mb-4'}>
        {items.map((item, index) => (
          <Breadcrumb.Item href={item.href} key={index}>
            <Flex gap={'0.25rem'}>
              {item.icon}
              {item.name}
            </Flex>
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  );
}
