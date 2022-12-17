import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Col, Form, Input, Row, theme, Typography } from 'antd';
import { Logo, error, success } from '../../../Common';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setProfile } from "../../../../store/Features/ProfileSlice"

const { Title } = Typography
const LoginForm = () => {
    const dispatch = useDispatch()
    const [valid, setisValid] = useState(false)
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
    const { state } = useLocation()
    useEffect(() => {
        if (String(username).trim().length > 0 &&
            String(password).trim().length > 0)
            setisValid(true)
        else
            setisValid(false)

    }, [username, password])

    const login = (values) => {
        if (valid === false)
            return error("Enter Valid Values First!")
        console.log('Received values of form: ', values);
        dispatch(setProfile(values?.username))
        localStorage.setItem("user", values?.username)
        success("Success ✨")
        navigate(state?.pathname ? state?.pathname : "/home")
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Form
            style={{ background: colorBgContainer }}
            name="normal_login"
            className="login-form"
            scrollToFirstError
            labelCol={{ span: 24 }}

            requiredMark={false}
            initialValues={{
                remember: true,
            }}
            onFinish={login}>
            <Form.Item>
                <Logo />
            </Form.Item>
            <Form.Item>
                <Typography>
                    <Title
                        style={{ marginTop: "35px" }}
                        level={5} className='colorPrimary'>
                        تسجيل الدخول
                    </Title>
                </Typography>
            </Form.Item>
            <Form.Item
                label={"البريد الاليكترونى"}
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Username!',
                    },
                ]}>

                <Input
                    onChange={e => setusername(e.currentTarget.value)}
                    className='basebgInput'
                    prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                label={"كلمة المرور"}
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Password!',
                    },
                ]}>
                <Input
                    onChange={e => setpassword(e.currentTarget.value)}
                    className='basebgInput'
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item className='flex-between'>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember Me</Checkbox>
                </Form.Item>

                <span className="login-form-forgot" href="">
                    Forgot password?
                </span>
            </Form.Item>

            <Form.Item>
                <Row justify={"center"} style={{ marginTop: "20px" }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className={`button ${valid ? "validButton" : "InvalidButton"}`}>
                        Log in
                    </Button>
                </Row>
            </Form.Item>
            <Form.Item>
                <Row justify={"center"}>
                    <Col className='text500'>
                        <label htmlFor="">
                            Already have an account ?
                        </label>
                        <Link to={"/register"}> register </Link>
                    </Col>
                </Row>
            </Form.Item>
        </Form>
    );
};
export default LoginForm;
