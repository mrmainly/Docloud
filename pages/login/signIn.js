import React from 'react'
import styled from 'styled-components'
import {Form, Input, Button, Checkbox ,Typography, Layout} from 'antd'
import { UserOutlined , LockOutlined } from '@ant-design/icons';
import {useRouter} from 'next/router'

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
const DivForm = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;

`
const MainDiv = styled.div`
    display: flex;
    justify-content: center;
    background: radial-gradient(circle, rgba(129,156,235,1) 2%, rgba(121,151,229,1) 6%, rgba(10,58,115,1) 49%);
    height: 100vh;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
`
const {Title} = Typography


const router = useRouter()
    return(
      <MainDiv>
        <div style={{ margin: '0 auto', display: 'flex', justifyContent: "center", alignItems: 'center', flexDirection: 'row' }}>
        <img src="/simbol.png" style={{width: 40}}/>
        <Title level={1} style={{color: 'white', marginLeft: 20, marginTop: 16}}>Docloud</Title>
        </div>
       
        <ContainerLogin style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'white', 
            width: 400, 
            height: 400, 
            borderRadius: 7, 
            margin: '0 auto',
            marginTop: 50
        }}>
          
      <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      style={{marginTop: 20}}
    >
      <Title level={3} style={{color: '#000000', display: 'flex', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif'}}>Вход в архивное дело</Title>
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

     <DivForm style={{display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
      <Form.Item name="remember" valuePropName="checked" >
        <Checkbox>запомни меня</Checkbox>
        <Button type="primary" htmlType="submit"
         
       >
          вход
        </Button>
      <Form.Item />
      
      </Form.Item>
      </DivForm>
    </Form>
        </ContainerLogin>
        </MainDiv>
    )
}

export default SignIn