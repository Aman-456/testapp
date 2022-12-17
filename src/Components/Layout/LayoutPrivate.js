import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    UserOutlined,
    BellFilled,
    AlignLeftOutlined,
    SearchOutlined,
    RetweetOutlined
} from '@ant-design/icons';
import { Button, Col, Input, Layout, Menu, Row, theme } from 'antd';
import { Outlet, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { direction } from '../../store/Features/languageSlice';
import DrawerWrapper from './Drawer';
import { setTheme, Theme } from '../../store/Features/themeSlice';
import { setProfile } from '../../store/Features/ProfileSlice';
// import { useTranslation } from "react-i18next"

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, onClick) {
    return {
        key,
        icon,
        label,
        onClick
    };
}

const LayoutPrivate = () => {
    // const { i18n, t } = useTranslation()
    const THEME = useSelector(Theme)
    const dispatch = useDispatch()
    const [collapsed, setCollapsed] = useState(false);
    const [open, setopen] = useState(null)
    const dir = useSelector(direction)
    const navigate = useNavigate()


    // const handlechangelang = (lang) => {
    //     // i18n.changeLanguage(lang)
    // }

    const items = [
        getItem(
            "شورى للاعمال",
            '1',
            <img className='logo' src='/assets/images/logo.svg' alt='' />,
            () => navigate("/")
        ),
        getItem(
            "Profile",
            '2', <UserOutlined />,
            () => navigate("/profile")
        ),
        getItem(
            "About",
            '3',
            <PieChartOutlined />,
            () => navigate("/about")
        ),
        getItem(
            "Contact",
            '4',
            <DesktopOutlined />,
            () => navigate("/contact")
        ),

        getItem(
            "Random",
            '5',
            <FileOutlined />,
            () => navigate("/radnom")
        ),
        getItem(
            "Logout",
            '6',
            <UserOutlined />,
            () => {
                localStorage.removeItem("user");
                dispatch(setProfile(null))
                // localStorage.removeItem("theme")
            }
        ),
    ];

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            dir={dir}>
            <Sider
                className='siderbar mdNone'
                style={{
                    background: colorBgContainer,
                    height: "100%"
                }}

                theme='light'

                collapsible={true}
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}>

                <Menu dir={dir} theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <DrawerWrapper
                style={{
                    background: colorBgContainer,
                }}
                open={open}
                setopen={setopen} >
                <Menu
                    style={{ border: "none" }}
                    theme="light"
                    defaultSelectedKeys={['1']}
                    mode="inline"
                    items={[
                        ...items,
                        {
                            key: "last",
                            icon: <BellFilled className="icon mdNone" />,
                        }
                    ]} />
            </DrawerWrapper>
            <Layout className='layout'>
                <Header
                    style={{
                        background: colorBgContainer,
                    }}>
                    <Row
                        style={{
                            height: "100%",
                        }}
                        justify={"space-between"}
                        align="middle">
                        <Col span={17}>
                            <Row style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1rem",
                            }}>
                                <Input
                                    className='SearchBar basebg'
                                    prefix={
                                        <SearchOutlined className='icon' />}
                                    placeholder="input search text"
                                // onSearch={() => { }}
                                />
                            </Row>
                        </Col>
                        <Col span={6}>
                            <Row style={{
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                gap: "1rem"
                            }}>
                                <BellFilled className="icon mdNone" />
                                <Button
                                    type='primary'
                                    className='hamburger'
                                    onClick={() => {
                                        dispatch(setTheme(THEME.flag === "light" ? 'dark' : "light"))
                                    }}>
                                    <RetweetOutlined style={{
                                        color: "black"
                                    }} />
                                </Button>
                                <Button
                                    className='hamburger mdDisplay'
                                    onClick={() => {
                                        setopen(e => !e)
                                    }}>
                                    <AlignLeftOutlined />
                                </Button>

                            </Row>
                        </Col>
                    </Row>
                </Header>
                <Content className='layoutConent'>
                    <Outlet />
                </Content>
                <Footer

                    style={{
                        textAlign: 'center',
                        background: colorBgContainer,
                        fontWeight: "bolder",
                        fontSize: "larger"
                    }}>
                    Shwra Dashboard
                </Footer>
            </Layout>
        </Layout>
    );
};
export default LayoutPrivate;