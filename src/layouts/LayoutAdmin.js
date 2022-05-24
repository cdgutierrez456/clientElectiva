import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { MenuTop } from "../components/AdminComponents/MenuTop";
import { MenuSider } from "../components/AdminComponents/MenuSider";
import { GithubOutlined } from "@ant-design/icons";
import { SingIn } from "../pages/Admin/singIn";
import "../scss/layoutAdmin.scss";

export const LayoutAdmin = (props) => {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  const user = null;

  if (!user) {
    return (
      <>
        <SingIn />
        <Routes>
          <Route path="/admin/login/*" element={<SingIn />} />
        </Routes>
      </>
    );
  }
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout
        className="layout-admin"
        style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
      >
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <h1>Rutas</h1>
        </Content>
        <Footer className="layout-admin__footer">
          <GithubOutlined style={{ fontSize: "17px" }} /> Cristian
        </Footer>
      </Layout>
    </Layout>
  );
};

/* export { LayoutAdmin } */
