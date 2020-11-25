import React, {useState} from 'react'
import { Layout, Button, Typography, Input, Form, Table } from "antd";
import LayoutMain from '../components/Layout/LayoutMain'
const {Content} = Layout; 
const {Title} = Typography;

const columns = [
    {
      dataIndex: 'position',
    },
    {
      dataIndex: 'user',
    },
    {
      dataIndex: 'organization',
    },
  ];
  const data = [
    {
      key: '1',
      position: 'itpark',
      user: 32,
      organization: 'yakutsk',
    },
  ];
const layout = {
    wrapperCol: { span: 30 },
};



const Representatives = ({}) => {
    const [state, setState] = useState()
    return(
      <LayoutMain titleId={"Представителя"} selectId={"5"}>
        <Content>
          <Button size="large" type="primary" style={{marginTop: 20}}>ДОБАВИТЬ НОВОГО ПРЕДСТАВИТЕЛЯ</Button>
          
                <Form {...layout} style={{display: "flex", flexDirection: 'row',marginLeft: 30, marginTop: 30}}>
                <Form.Item style={{width:'25%',}}>
                    <Title level={5} style={{ color: '#007dfd', }}>Должность</Title>
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
                    <Title level={5} style={{ color: '#007dfd', whiteSpace: 'nowrap',}}>Пользователь</Title>
                    <Input bordered={false} style={{borderBottom: "1px solid gray",}} />
                </Form.Item>
                <Form.Item style={{marginLeft: '8%', width:'25%', }}>
                    <Title level={5} style={{ color: '#007dfd', whiteSpace: 'nowrap',}}>Организация</Title>
                    <Input bordered={false} style={{borderBottom: "1px solid gray",}} />
                </Form.Item>
                </Form>
        
         
                <Table style={{paddingLeft: 30}}  columns={columns} dataSource={data}/>
         
        </Content>
        </LayoutMain>
    )
}

export default Representatives