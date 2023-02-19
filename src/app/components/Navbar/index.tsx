import React from 'react'
import { Link } from "react-router-dom";
import type { MenuProps,  } from 'antd';
import {  Layout, Menu, theme } from 'antd';
const { Header} = Layout;

const items1: MenuProps['items'] = [
  {
    key:'product',
    label:(
      <Link to="/product">Product</Link>
    )
  },
  {
    label: (
      <Link to="/sale">Sale</Link>
    ),
    key: 'sale',
  },
  {
    label: (
      <Link to="/purchase">Purchase</Link>
    ),
    key: 'purchase',
  },
] 

export default function Navbar() {
  return (
    <Header className="header">
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
  </Header>
  )
}
