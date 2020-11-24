import React, { useContext } from "react";
import { Layout, Menu, Typography } from "antd";
import styled from "styled-components";
import {useRouter} from 'next/router'
import { UserOutlined ,
    MailOutlined ,
    InsertRowLeftOutlined ,
    TeamOutlined ,
    BankOutlined , 
    FolderOutlined ,
    WalletOutlined , 
    ExpandAltOutlined, 
    ReadOutlined, 
    FileOutlined,
    CheckOutlined} from '@ant-design/icons';
const { Sider } = Layout;
const { Title } = Typography;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Span = styled.span`
    color: white;
`
const ContainerTitle = styled.div`
   
`

const LeftPanel = ({select}) => {
  const router = useRouter();
 
  return (
    <Sider width={"23%"} className="site-layout-background" style={{backgroundColor: '#616161',  overflow: 'auto', height: '100vh',left: 0,}}>
      <Menu
        theme="dark"
        defaultSelectedKeys={select}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 , backgroundColor: '#616161',}}
        mode="inline"
      >  
        <ContainerTitle>
            <Title level={1} style={{color: 'white', fontFamily: 'sans-serif', marginTop: 20, marginLeft: 20,}}>Docloud</Title>
          
         </ContainerTitle>
        <Menu.ItemGroup>
        <Menu.Item icon={<UserOutlined />} key="1"><Span>Admin</Span></Menu.Item>
        <Menu.Item key="2" icon={<MailOutlined />}><Span>docloud@mail.ru</Span></Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g1" title="Карточки организации" style={{color: '#d5d5d5'}}>
          <Menu.Item key="4" onClick={() => {
            router.push('/')
          }} icon={<InsertRowLeftOutlined />}><Span>Организации</Span></Menu.Item>
          <Menu.Item key="5" onClick={() => {
            router.push('/representatives')
          }} icon={<TeamOutlined />}><Span>Представители</Span></Menu.Item>
          <Menu.Item key="6" onClick={() => {
            router.push('/subdivision')
          }} icon={<BankOutlined />}><Span>Подразделения</Span></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="Архив">
          <Menu.Item key="7" icon={<FolderOutlined />} onClick={() => {
            router.push('/directory')
          }}><Span>Справочники</Span></Menu.Item>
          <Menu.Item key="8" icon={<WalletOutlined />}><Span>Документы</Span></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="Работа с запросами">
          <Menu.Item
            key="9"
            icon={<ExpandAltOutlined />}
          >
              <Span>
            Запросы
            </Span>
          </Menu.Item>
          <Menu.Item key="10" icon={<ReadOutlined />}><Span>Коменнтарии</Span></Menu.Item>
          <Menu.Item key="15" icon={<FileOutlined />}><Span>Файлы</Span></Menu.Item>
          <Menu.Item key="16" icon={<CheckOutlined />}><Span>Статусы</Span></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

export default LeftPanel;