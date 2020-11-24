import React from "react";
import styled from "styled-components";
import { Layout, Menu } from "antd";

const { Header, Content } = Layout;

const Title = styled.p`
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
`
const Navbar = ({title}) => {
  return (
      <Header className="header" style={{ backgroundColor: "#176887" }}>
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{ backgroundColor: "#176887" }}
        >
         
            <Title style={{color: 'white', fontSize: 24,fontFamily: 'Arial, Helvetica, sans-serif'}}>
               {title}
            </Title>
       
        </Menu>
      </Header>
  );
};

export default Navbar;