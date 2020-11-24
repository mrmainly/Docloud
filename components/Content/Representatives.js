import React, {useState} from 'react'
import { Layout, Button, Typography, Input, Form, Table } from "antd";
import styled from 'styled-components'
import { BorderLeftOutlined } from '@ant-design/icons';
const {Content} = Layout; 
const {Title} = Typography;

const columns = [
    {
      dataIndex: 'nameOfCompany',
    },
    {
      dataIndex: 'Inn',
    },
    {
      dataIndex: 'LegalAdress',
    },
  ];
  const data = [
    {
      key: '1',
      nameOfCompany: 'itpark',
      Inn: 32,
      LegalAdress: 'yakutsk',
    },
  ];
const layout = {
    wrapperCol: { span: 30 },
};



const Organization = ({}) => {
    const [state, setState] = useState()
    return(
        <Content>
          <Button size="large" type="primary" style={{marginTop: 20}}>ДОБАВИТЬ НОВОГО ПРЕДСТОВИТЕЛЯ</Button>
          <Title level={5} style={{marginTop: 15}}>Показать записи 1-1 из 1 </Title>
          
                <Form {...layout} style={{display: "flex", flexDirection: 'row',marginLeft: 30}}>
                <Form.Item style={{width:'25%',}}>
                    <Title level={5} style={{ color: '#007dfd', }}>Ноименование организации</Title>
                    <Input  
                        bordered={false} 
                        style={{borderBottom: "1px solid gray",}} 
                        value={state}
                        onChange={(e) => {
                            setState(e.target.value)
                        }}
                    />
                </Form.Item>
                <Form.Item style={{marginLeft: '8%', width:'25%',}}>
                    <Title level={5} style={{ color: '#007dfd', whiteSpace: 'nowrap',}}>ИНН</Title>
                    <Input bordered={false} style={{borderBottom: "1px solid gray",}} />
                </Form.Item>
                <Form.Item style={{marginLeft: '8%', width:'25%', }}>
                    <Title level={5} style={{ color: '#007dfd', whiteSpace: 'nowrap',}}>Юридический адресс</Title>
                    <Input bordered={false} style={{borderBottom: "1px solid gray",}} />
                </Form.Item>
                </Form>
        
         
                <Table style={{paddingLeft: 30}}  columns={columns} dataSource={data}/>
         
        </Content>
    )
}

export default Organization 