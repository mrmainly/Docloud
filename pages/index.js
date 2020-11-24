import { Layout, Menu } from "antd";
import React  from "react";

import Organization from '../components/Content/Organization'
import LeftPanel from "../components/Layout/LeftPanel";
import Navbar from "../components/Layout/Navbar";
import FooterOn from '../components/Layout/FooterOn'
const { Header, Content, Footer } = Layout;

export default function Home() {

  return (
      <Layout>
        <LeftPanel select="4"/>
        <Layout>
        <Navbar title="Организация" />
          <Layout style={{ padding: "0 24px 24px" }}>
              <Organization/>
          </Layout>
          <FooterOn />
        </Layout>
        
      </Layout>
  )
}
