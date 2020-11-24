import React from 'react'
import styled from 'styled-components'
import {Form, Input, Button, Checkbox} from 'antd'
import { UserOutlined , LockOutlined } from '@ant-design/icons';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 28 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 25 },
  };

const SignIn = () => {
    const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #cacaca;
    width: 300px;
    height: 300px;
    border-radius: 7px;
    margin: 0 auto;
`
    return(
        <ContainerLogin style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: '#cacaca', 
            width: 300, 
            height: 300, 
            borderRadius: 7, 
            margin: '0 auto',
            marginTop: 100
            
        }}>
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
    >
      <Form.Item
        rules={[{ required: true, message: 'Please input your username!' }]}
       
      >
        <Input placeholder="имя пользователя" prefix={<UserOutlined style={{color: 'gray'}} />}/>
      </Form.Item>

      <Form.Item
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="пароль" prefix={<LockOutlined style={{color: 'gray'}}/>}/>
      </Form.Item>


      <Form.Item name="remember" valuePropName="checked" style={{margin: '0 8px'}} {...tailLayout}>\

        <Checkbox>запомни меня</Checkbox>
      
        <Button type="primary" htmlType="submit">
          вход
        </Button>
      </Form.Item>
      
    </Form>
        </ContainerLogin>
    )
}

export default SignIn