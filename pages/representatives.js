import { Layout, Menu } from "antd";
import React  from "react";

import LeftPanel from "../components/Layout/LeftPanel";
import Navbar from "../components/Layout/Navbar";
import FooterOn from '../components/Layout/FooterOn';
import Represantive from '../components/Content/Representatives'
const { Header, Content, Footer } = Layout;

export default function Home() {

  return (
      <Layout>
        <LeftPanel select="5"/>
        <Layout>
        <Navbar title="Представители" />
          <Layout style={{ padding: "0 24px 24px" }}>
              <Represantive />
          </Layout>
          <FooterOn />
        </Layout>
        
      </Layout>
  )
}