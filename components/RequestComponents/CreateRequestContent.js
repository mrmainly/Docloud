import React, {useState} from 'react'
import {useRouter} from 'next/router'
import { Layout, Button, Typography, Input, Form, Table } from "antd";
import {SettingOutlined, EditOutlined, DeleteOutlined} from '@ant-design/icons'
import styled from 'styled-components'
import Card from '../Card'
const {Content} = Layout; 
const {Title} = Typography;


const CreateRequestContent = ({}) => {
    const [state, setState] = useState()

    const ContainerForm = styled.div`
       
    `
    const layout = {
        wrapperCol: { span: 30 },
    };
    const router = useRouter();
    return(
        <Content>
          <Button size="large" type="primary" style={{marginTop: 20}} onClick={() => {
              router.push('/Request/createRequest')
          }}>СОЗДАТЬ ЗАПРОС</Button>
          <Form {...layout} style={{display: "flex", flexDirection: 'column', marginTop: 20}}>
                <Form.Item style={{width:'100%',}}>
                    <Title level={5} style={{ color: 'gray', }}>Найти</Title>
                    <Input  
                        bordered={false} 
                        style={{borderBottom: "1px solid gray",}} 
                        value={state}
                        onChange={(e) => {
                            setState(e.target.value)
                        }}
                    />
                    <Button size="large" type="primary" style={{marginTop: 20}}>Поиск</Button>
                </Form.Item>
            <ContainerForm style={{display: 'flex', flexDirection: 'row'}}>
                <Form.Item style={{ width:'25%',}}>
                    <Title level={5} style={{ color: '#007dfd', whiteSpace: 'nowrap',}}>ИНН</Title>
                    <Input bordered={false} style={{borderBottom: "1px solid gray",}} />
                </Form.Item>
                <Form.Item>
                    <Title level={5} style={{ color: '#007dfd', whiteSpace: 'nowrap',}}>Организация</Title>
                </Form.Item>
                <Form.Item style={{marginLeft: '8%', width:'25%', }}>
                    <Title level={5} style={{ color: '#007dfd', whiteSpace: 'nowrap',}}>Юридический адресс</Title>
                    <Input bordered={false} style={{borderBottom: "1px solid gray",}} />
                </Form.Item>
                <Form.Item>
                    <Title level={5} style={{ color: '#007dfd', whiteSpace: 'nowrap',}}>Статус</Title>
                </Form.Item>
                </ContainerForm>
                </Form>
                <Table />

                
        </Content>
    )
}

export default CreateRequestContent