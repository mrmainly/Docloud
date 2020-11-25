import React, {useState} from 'react'
import { Layout, Button, Typography, Input, Form, Table } from "antd";
import styled from 'styled-components'
import { BorderLeftOutlined } from '@ant-design/icons';
import LayoutMain from '../components/Layout/LayoutMain'
const {Content} = Layout; 
const {Title} = Typography;

const columns = [
    {
      title: 'Заголовок дела',
      dataIndex: 'caseTitle',
    },
    {
      title: 'Крайние даты',
      dataIndex: 'deadlineDates',
    },
    {
      title: 'Количество листов',
      dataIndex: 'namberOfSheets',
    },
    {
        title: 'Примечание',
        dataIndex: 'application',
    },
    {
        title: 'Год документа',
        dataIndex: 'documentYear',
    },
  ];
  const data = [
    {
      key: '1',
      caseTitle: 
      <Input  
       bordered={false} 
       style={{borderBottom: "1px solid gray",}} 
       placeholder="введите текст"
       />,
      deadlineDates:
     <Input  
      bordered={false} 
      style={{borderBottom: "1px solid gray",}}
      placeholder="введите текст"
      />,
      namberOfSheets: 
      <Input  
      bordered={false} 
      style={{borderBottom: "1px solid gray",}} 
      placeholder="введите текст"
      />,
      application: 
      <Input  
      bordered={false} 
      style={{borderBottom: "1px solid gray",}}  
      placeholder="введите текст"
      />,
      documentYear: 
      <Input  
      bordered={false} 
      style={{borderBottom: "1px solid gray",}}  
      placeholder="введите текст"
      />,
    },
  ];
const layout = {
    wrapperCol: { span: 30 },
};


export default function Request() {

  return (
      <LayoutMain titleId={"Новый документ: Опись 1 дел постоянного хранения"} selectId={"8"}>
        <Content>
          <Title level={5} style={{color: 'gray'}}>Заголовок</Title>
          <Title level={4} style={{marginTop: 15}}>Опись 1 дел постоянного хранения</Title>
         
                {/* <Form {...layout} style={{display: "flex", flexDirection: 'row',marginLeft: 30}}>
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
                </Form> */}
         
                
                <Table style={{paddingLeft: 30}}  columns={columns} dataSource={data}  pagination={false}/>
                <Button size="large" type="primary" style={{marginTop: 20}}>СОЗДАТЬ</Button>
        </Content>
        
      </LayoutMain>
  )
}
