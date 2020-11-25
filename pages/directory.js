import React, {useState} from 'react'
import { Layout, Button, Typography, } from "antd";
import Card from '../components/Card'
import styled from 'styled-components'
import LayoutMain from '../components/Layout/LayoutMain'
const {Content} = Layout; 

export default function directory() {

  const ContainerCard = styled.div`
    
  `

  return (
      <LayoutMain titleId={"directory"} select={"7"} >
        <Content>
          <Button size="large" type="primary" style={{marginTop: 20}}>ДОБАВИТЬ НОВУЮ ОРГАНИЗАЦИЮ</Button>
          <ContainerCard style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
           <Card />
          </ContainerCard>  
        </Content>
      </LayoutMain>
  )
}