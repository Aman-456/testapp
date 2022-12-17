import React from 'react';
import { Drawer } from 'antd';
const DrawerWrapper = ({ children, open, setopen, style }) => {

    return (
        <div className='drawer mdDisplay'>
            <Drawer
                headerStyle={{ display: "none" }}

                style={style}
                title="Basic Drawer"
                placement="right"
                onClose={() => setopen(e => !e)}
                open={open}>
                {children}
            </Drawer>
        </div >
    );
};
export default DrawerWrapper;