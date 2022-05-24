import React from "react";
import { Layout } from "antd";
import "../scss/layoutAdmin.scss";
export const LayoutBasic = (props) => {
  const { children } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <Layout>
        <Header className="headerAdmin">Header</Header>
        <Content>{children}</Content>
        <Footer className="footerAdmin">React Project 2022</Footer>
      </Layout>
    </Layout>
  );
};

/* export { LayoutAdmin } */
