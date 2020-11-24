import { Layout, Menu } from "antd";
import React  from "react";

import LeftPanel from "../components/Layout/LeftPanel";
import Navbar from "../components/Layout/Navbar";
import FooterOn from '../components/Layout/FooterOn';
import Subdivision from '../components/Content/Subdivision'
const { Header, Content, Footer } = Layout;

export default function Home() {

  return (
      <Layout>
        <LeftPanel select="6"/>
        <Layout>
        <Navbar title="Подразделения" />
          <Layout style={{ padding: "0 24px 24px" }}>
              <Subdivision />
          </Layout>
          <FooterOn />
        </Layout>
        
      </Layout>
  )
}