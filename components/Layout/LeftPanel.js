import React, { useContext, useState } from "react";
import { Button, Layout, Menu, Typography } from "antd";
import styled from "styled-components";
import {useRouter} from 'next/router'
import Link from 'next/link'
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
    CheckOutlined,
    MenuFoldOutlined} from '@ant-design/icons';
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
const Span = styled.a`
    color: white;
`
const ContainerTitle = styled.div`
   
`

const LeftPanel = ({select}) => {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (collapsed) => {

    setCollapsed(collapsed)
  };
 
  return (
    <Sider width={"23%"} className="site-layout-background" style={{backgroundColor: '#616161'}}  collapsed={collapsed} collapsible onCollapse={onCollapse}>
      
      <Menu
        theme="dark"
        defaultSelectedKeys={select}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 , backgroundColor: '#616161',}}
        mode="inline"
      >  
        <Menu.Item key="1" disabled style={{marginTop: 30}}>
            <Title level={1} style={{color: 'white', fontFamily: 'sans-serif'}}>Docloud</Title>
          </Menu.Item>
      
        <Menu.ItemGroup>
        <Menu.Item icon={<UserOutlined />} key="1"><Span>Admin</Span></Menu.Item>
        <Menu.Item key="2" icon={<MailOutlined />}><Span>docloud@mail.ru</Span></Menu.Item>
        </Menu.ItemGroup>

        <Menu.ItemGroup key="g1" title="Карточки организации" style={{color: '#d5d5d5'}}>
          <Menu.Item key="4" icon={<InsertRowLeftOutlined />}><Link href="/"><Span>Организации</Span></Link></Menu.Item>
          <Menu.Item key="5" icon={<TeamOutlined />}><Link href="/representatives"><Span>Представители</Span></Link></Menu.Item>
          <Menu.Item key="6" icon={<BankOutlined />}><Link href="/subdivision"><Span>Подразделения</Span></Link></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="Архив">
          <Menu.Item key="7" icon={<FolderOutlined />}><Link href="/directory"><Span>Справочники</Span></Link></Menu.Item>
          <Menu.Item key="8" icon={<WalletOutlined />}><Link href="/documents"><Span>Документы</Span></Link></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="Работа с запросами">
          <Menu.Item
            key="9"
            icon={<ExpandAltOutlined />}
          >
            <Link href="/Request/request">
              <Span>
            Запросы
            </Span>
            </Link>
          </Menu.Item>
          <Menu.Item key="10" icon={<ReadOutlined />}><Link href=""><Span>Коменнтарии</Span></Link></Menu.Item>
          <Menu.Item key="15" icon={<FileOutlined />}><Span>Файлы</Span></Menu.Item>
          <Menu.Item key="16" icon={<CheckOutlined />}><Span>Статусы</Span></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

export default LeftPanel;