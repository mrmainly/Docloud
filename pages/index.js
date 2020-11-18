import { Layout, Menu } from "antd";
import React  from "react";
import LeftPanel from "../components/LeftPanel";
import Navbar from "../components/Navbar";
import FooterOn from '../components/FooterOn'
const { Header, Content, Footer } = Layout;

export default function Home() {

  return (
      <Layout>
        <LeftPanel />
        <Layout>
        <Navbar />
          <Layout style={{ padding: "0 24px 24px" }}>
             <Content>
               aefwefwfe
             </Content>
          </Layout>
          <FooterOn />
        </Layout>
        
      </Layout>
  )
}
