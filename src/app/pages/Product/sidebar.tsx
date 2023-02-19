import React from 'react'
import { Link } from "react-router-dom";
import type { MenuProps,  } from 'antd';
import {  Layout, Menu, theme } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;

const items2: MenuProps['items'] = [
  {
    key:'viewProduct',
    icon: React.createElement(LaptopOutlined),
    label: <Link to="view">View Products</Link>
  },
  {
    key:'addProduct',
    icon: React.createElement(LaptopOutlined),
    label: <Link to="add">Add Products</Link>
  }
]



// [UserOutlined, LaptopOutlined, NotificationOutlined].map(
//   (icon, index) => {
//     const key = String(index + 1);

//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//     };
//   },
// );

export default function SideBar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
  )
}

