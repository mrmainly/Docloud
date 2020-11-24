import React, {useState} from 'react'
import { Layout, Button, Typography, Card } from "antd";
import {SettingOutlined, EditOutlined, EllipsisOutlined} from '@ant-design/icons'
import styled from 'styled-components'
const {Content} = Layout; 
const {Title} = Typography;


const Organization = ({}) => {
    const [state, setState] = useState()

    const ContainerCard = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
    `
    return(
        <Content>
          <Button size="large" type="primary" style={{marginTop: 20}}>ДОБАВИТЬ НОВУЮ ОРГАНИЗАЦИЮ</Button>
        <ContainerCard style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
          <Card title="медицинские карточки"   
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          style={{ width: '50%', marginTop: 16 }}>
             <Title level="3">card body</Title>
          </Card>

          <Card title="медицинские карточки"   
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
          style={{ width: '50%', marginTop: 16 }}>
             <Title level="3">card body</Title>
          </Card>
          </ContainerCard>
        </Content>
    )
}

export default Organization 