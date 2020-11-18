import React, { useContext } from "react";
import { Layout, Menu, Typography } from "antd";
import styled from "styled-components";
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

const LeftPanel = () => {

  return (
    <Sider width={"20%"} className="site-layout-background" style={{backgroundColor: '#616161'}}>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 , backgroundColor: '#616161',}}
        
      >  
         <Menu.Item style={{marginTop: 20 , cursor: 'text'}}>
            <Title level={1} style={{color: 'white'}}>Docloud</Title>
            </Menu.Item>
        <Menu.ItemGroup key="g1" title="Карточки организации" style={{color: '#d5d5d5'}}>
          <Menu.Item key="4"><Span>организации</Span></Menu.Item>
          <Menu.Item key="5" ><Span>предстовители</Span></Menu.Item>
          <Menu.Item key="6"><Span>подразделения</Span></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="Архив">
          <Menu.Item key="7"><Span>Справочники</Span></Menu.Item>
          <Menu.Item key="8"><Span>Документы</Span></Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g1" title="Работа с запросами">
          <Menu.Item
            key="9"
          >
              <Span>
            Запросы
            </Span>
          </Menu.Item>
          <Menu.Item key="10"><Span>Коменнтарии</Span></Menu.Item>
          <Menu.Item key="15"><Span>Файлы</Span></Menu.Item>
          <Menu.Item key="16"><Span>Статусы</Span></Menu.Item>
        </Menu.ItemGroup>
      </Menu>
    </Sider>
  );
};

export default LeftPanel;