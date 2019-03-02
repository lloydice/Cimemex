import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Movies } from "../components";

const { Header, Content, Footer } = Layout;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <h2 style={{ color: "#FF4000" }}>Cimemex</h2>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64, height: "100rem" }}>
          <Movies />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Panther Design 2019
        </Footer>
      </Layout>
    );
  }
}

export default Main;
