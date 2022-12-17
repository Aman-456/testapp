import { Col, Row } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';


function Loader({ fullpage }) {
    const stylefull = {
        position: "fixed",
        left: "0",
        top: "0",
        width: "100vw",
        height: "100vh",
        background: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "15px",
        alignItems: "center",
        zIndex: 1001,
    }

    return (
        <Row>
            <Col span={24}
                style={stylefull} >
                <LoadingOutlined style={{ fontSize: 24 }} spin />
            </ Col>
        </Row >
    )
}

export default Loader