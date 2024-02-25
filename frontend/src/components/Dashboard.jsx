import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    LogoutOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const Dashboard = ({ children }) => {
    const items = [
        { icon: <HomeOutlined />, label: <Link to='/'>Home</Link> },
        { icon: <UserOutlined />, label: <Link to='profile'>Profile</Link> },
        { icon: <VideoCameraOutlined />, label: <Link to='/'>Video</Link> },
        { icon: <UploadOutlined />, label: <Link to='/'>Upload new file</Link> },
        { icon: <BarChartOutlined />, label: <Link to='/'>Chart</Link> },
        { icon: <CloudOutlined />, label: <Link to='/icloud'>iCloud</Link> },
        { icon: <AppstoreOutlined />, label: <Link to='/'>AppStore</Link> },
        { icon: <TeamOutlined />, label: <Link to='/'>Team</Link> },
        { icon: <ShopOutlined />, label: <Link to='/'>Shop</Link> },
        { icon: <LogoutOutlined />, label: <Link to='/logout'>Logout</Link>, danger: true },
    ];

    const [collapse, setCollapse] = useState(false);
    const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
    return (
        <Layout hasSider>
            <Sider
                collapsible
                collapsed={collapse}
                onCollapse={() => setCollapse(!collapse)}
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" items={items} defaultSelectedKeys={['1']} />
            </Sider>
            <Layout
                style={{
                    marginLeft: collapse ? "80px" : 200,
                    transition: 'margin-left 0.3s ease'
                }}
            >
                <Header
                    style={{
                        padding: "0 10px",
                        background: colorBgContainer,
                        verticalAlign: "middle"
                    }}
                >
                    Dashboard
                </Header>
                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                        minHeight: 'calc(100vh - 160px)'
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    AfrikCash ©{new Date().getFullYear()} Created by Emman Boika
                </Footer>
            </Layout>
        </Layout>
    );
};
export default Dashboard;