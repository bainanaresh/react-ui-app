import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import Registration from './Registration';
import { useNavigate } from 'react-router-dom';
import { loginAPICall, logout, saveLoggedInUser, storeToken } from './authServiceApi';

const Login = () => {
  const navigator=useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log('Received values of form: ', values.username,values.password);
    handleLoginForm(values.username,values.password);
  };

  async function handleLoginForm(username,password){

    //e.preventDefault();

    await loginAPICall(username, password).then((response) => {
        console.log(response.data);

        //const token = 'Basic ' + window.btoa(username + ":" + password);
        const token = 'Bearer ' + response.data.accessToken;
        const role = response.data.role;
        console.log(token);
        storeToken(token);

        saveLoggedInUser(username,role);
        navigator("/dashboard")

        window.location.reload(false);
    }).catch(error => {
        console.error(error);
    })

}

  return (
    <div className='loginForm'>
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a href="">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <a href="/registration">Register now!</a>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Login;