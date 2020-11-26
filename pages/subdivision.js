import React, {useState} from 'react'
import { Layout, Button, Typography, Input, Form, Table } from "antd";
import LayoutMain from '../components/Layout/LayoutMain'
import styled from 'styled-components'
const {Content} = Layout; 
const {Title} = Typography;

const columns = [
    {
      dataIndex: 'nameSub',
    },
    {
      dataIndex: 'nameRep',
    },
  ];
  const data = [
    {
      key: '1',
      nameRep: 'itpark',
      nameSub: 32,
    },
  ];
const layout = {
    wrapperCol: { span: 30 },
};


const Subdivision = ({}) => {
    const [state, setState] = useState()
    return(
      <LayoutMain selectId={"6"} titleId={"Подразделения"} >
        <Content>
          <Button size="large" type="primary" style={{marginTop: 20}}>ДОБАВИТЬ НОВОЕ ПОДРАЗДЕЛЕНИЕ</Button>
            
                <Form {...layout} style={{display: "flex", flexDirection: 'row',marginLeft: 30, marginTop: 30}}>
           
                <Form.Item style={{width: 200,}}>
                    <Title level={5} style={{ color: '#007dfd', }}>Наименования подразделения</Title>
                    <Input  
                        bordered={false} 
                        style={{borderBottom: "1px solid gray",}} 
                        value={state}
                        onChange={(e) => {
                            setState(e.target.value)
                        }}
                    />
                </Form.Item>
                <Form.Item style={{marginLeft: '8%', width: 200,}}>
                    <Title level={5} style={{ color: '#007dfd',}}>Наименование организации</Title>
                    <Input bordered={false} style={{borderBottom: "1px solid gray",}} />
                </Form.Item>
      
                </Form>
        
         
                <Table style={{paddingLeft: 30}}  columns={columns} dataSource={data}/>
         
        </Content>
      </LayoutMain>
    )
}

export default Subdivision