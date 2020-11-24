import { Layout, Menu } from "antd";
import React  from "react";

import LeftPanel from "../components/Layout/LeftPanel";
import Navbar from "../components/Layout/Navbar";
import FooterOn from '../components/Layout/FooterOn';
import Directory from '../components/Content/Directory'
const { Header, Content, Footer } = Layout;

export default function Home() {

  return (
      <Layout>
        <LeftPanel select="6"/>
        <Layout>
        <Navbar title="Справочник" />
          <Layout style={{ padding: "0 24px 24px" }}>
              <Directory />
          </Layout>
          <FooterOn />
        </Layout>
        
      </Layout>
  )
}