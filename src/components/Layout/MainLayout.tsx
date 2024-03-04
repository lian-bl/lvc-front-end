import { FieldTimeOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { useClock } from '@/hooks/useClock';
import { useDisclosure } from '@/hooks/useDisclosure';
import { MENU_CONFIG } from '@/routes/config';
import { DEFAULT_ENV } from '@/utils/env';

const { Header, Content, Sider } = Layout;
const appName = DEFAULT_ENV.productName;
const SiderWidth = 280;

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-16">
      <Link className="flex items-center" to=".">
        <img className="h-8 w-auto mr-1" src={DEFAULT_ENV.logoURL} alt={appName} />
      </Link>
      <Link className="flex items-center text-white" to=".">
        <span className="text-base font-semibold">{appName}</span>
      </Link>
    </div>
  );
};

const CollapsedLogo = () => {
  return (
    <div className="flex items-center justify-center h-16">
      <Link className="flex items-center" to=".">
        <img className="h-8 w-auto" src={DEFAULT_ENV.logoURL} alt={appName} />
      </Link>
    </div>
  );
};

const SideNavigation = () => {
  return <Menu mode="inline" defaultSelectedKeys={['./discussions']} items={MENU_CONFIG} />;
};

const Copyright = () => {
  return (
    <div className="absolute bottom-20 text-[10px] text-teal-100 px-4">
      Copyright © 中国人民解放军第九六零一工厂 版权所有
    </div>
  );
};

const DateTimeCounter = () => {
  const [dateTimeString] = useClock();
  return (
    <>
      <FieldTimeOutlined />
      <span className="ml-1">{dateTimeString}</span>
    </>
  );
};

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, toggle } = useDisclosure(false);

  return (
    <Layout className="h-screen overflow-hidden">
      <Sider theme="light" width={SiderWidth} trigger={null} collapsible collapsed={isOpen}>
        {isOpen ? <CollapsedLogo /> : <Logo />}
        <SideNavigation />
        {!isOpen && <Copyright />}
      </Sider>
      <Layout>
        <Header className="flex items-center px-0 shadow-[inset_0_-1px_0_0_rgb(208,215,222)]">
          <Button
            className="w-16 h-16"
            type="text"
            size="large"
            icon={isOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => toggle()}
          />
          <div className="flex justify-end w-full mr-2">
            <DateTimeCounter />
          </div>
        </Header>
        <Content className="block">{children}</Content>
      </Layout>
    </Layout>
  );
};
