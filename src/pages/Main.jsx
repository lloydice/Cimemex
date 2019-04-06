import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Movies, Sinopsis } from "../components";
import { BrowserRouter as Router, Route } from "react-router-dom";

const { Header, Content, Footer } = Layout;

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Layout>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="logo" />
            <h2 style={{ color: "#FF4000" }}>Cimemex</h2>
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <Route exact path="/" component={Movies} />
            <Route path="/sinopsis/:id" component={Sinopsis} />
          </Content>
          <Footer style={{ textAlign: "center" }}>Gray Team Design 2019</Footer>
        </Layout>
      </Router>
    );
  }
}

export default Main;
