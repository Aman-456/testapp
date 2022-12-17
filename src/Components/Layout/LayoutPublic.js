import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { Outlet } from "react-router-dom"
import { direction } from '../../store/Features/languageSlice';
import { Theme } from '../../store/Features/themeSlice';
const { Content } = Layout;

const LayoutPublic = () => {
    const dir = useSelector(direction)
    const theme = useSelector(Theme)
    return (
        <Layout
            dir={dir}
            className={`site-layout publiclayout ${theme.flag === "dark" ? "dark" : "light"}`}>
            <Content
                className='publiclayoutContent'>
                <Outlet />
            </Content>
        </Layout>
    );
};
export default LayoutPublic;