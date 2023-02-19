import React from 'react';

import type { MenuProps,  } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Navbar from '../Navbar';
import SideBar from '../Sidebar';

const { Header, Content, Sider } = Layout;





interface BaseLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: React.FC<BaseLayoutProps> = ({children}) => {
//console.log(props);
//const { Left, right, top } = props;

const {
  token: { colorBgContainer },
} = theme.useToken();
  return (
    <Layout>
      <Navbar />
      {children}
    </Layout>
  );
};

export default AppLayout;