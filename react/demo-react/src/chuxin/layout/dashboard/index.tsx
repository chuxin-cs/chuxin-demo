import React, {FC, useState} from "react";
import {Outlet} from "react-router-dom";
import {
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Button, Menu} from 'antd';


import {Layout} from 'antd';

const {Header, Sider, Content} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        key: 'sub1',
        label: 'Navigation One',
        icon: <MailOutlined/>,
        children: [
            {key: '5', label: 'Option 5'},
            {key: '6', label: 'Option 6'},
            {key: '7', label: 'Option 7'},
            {key: '8', label: 'Option 8'},
        ],
    },
];

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(50% - 8px)',
    maxWidth: 'calc(50% - 8px)',
};

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const DashboardLayout: FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    return <>
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>Header</Header>
            <Layout>
                <Sider width="25%" style={siderStyle}>
                    <div style={{width: 256}}>
                        <Button type="primary" onClick={toggleCollapsed} style={{marginBottom: 16}}>
                            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        </Button>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                            items={items}
                        />
                    </div>
                </Sider>
                <Content style={contentStyle}>
                    <Outlet/>
                </Content>
            </Layout>
        </Layout>
    </>;
}

export default DashboardLayout;











