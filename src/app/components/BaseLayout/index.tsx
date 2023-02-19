import React from 'react';

import type { MenuProps,  } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

interface BaseLayoutProps {
  sidebar?:  React.ReactNode
  content?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({sidebar, content}) => {
//console.log(props);
//const { Left, right, top } = props;

const {
  token: { colorBgContainer },
} = theme.useToken();
  return (
    
      <Layout>
        {sidebar}
        <Layout style={{ padding: '0 24px 24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            { content }
          </Content>
        </Layout>
      </Layout>
  
  );
};

export default BaseLayout;