import React from 'react'
import { Layout, Typography, Card } from "antd";
import { EditOutlined, DeleteOutlined} from '@ant-design/icons'
const {Content} = Layout; 
const {Title} = Typography;
const CardBody = () => {
    return(
        <Card
        actions={[
          <Title level={5}>Перейти</Title>
        ]}
        style={{ width: '30%', marginTop: 16, }}>
            <Title level={4}>
                 опись 1 дел постоянного хранения
            </Title>
        </Card>
    )
}

export default CardBody