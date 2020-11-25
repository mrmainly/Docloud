import { Layout, Menu } from "antd";
import React  from "react";

import LeftPanel from "./LeftPanel";
import Navbar from "./Navbar";
import FooterOn from './FooterOn';
const { Header, Content, Footer } = Layout;

export default function LayoutMain({children, titleId, selectId}) {
   
  return (
      <Layout>
        <LeftPanel select={selectId}/>
        <Layout>
        <Navbar title={titleId} />
          <Layout style={{ padding: "0 24px 24px" }}>
              {children}
          </Layout>
          <FooterOn />
        </Layout>
        
      </Layout>
  )
}