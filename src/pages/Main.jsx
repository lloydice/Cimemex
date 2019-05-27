import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Movies, Sinopsis } from "../components";
import Login from './Login';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateMovie from './CreateMovie';
import Sala from './Sala';
import Ticket from './Ticket';

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
            <img style={{ width: '200px', height: '60px' }} src="https://i.ibb.co/4NLWY1T/cimemex-logo.png"></img>
          </Header>
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <Route exact path="/" component={Movies} />
            <Route exact path="/sinopsis/:idPelicula/sala/:idSala/cartelera/:idCartelera" component={Sala} />
            <Route exact path="/sinopsis/:id" component={Sinopsis} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/CrearPelicula" component={CreateMovie} />
            <Route exact path="/ticket/:idTicket" component={Ticket} />
          </Content>
          <Footer style={{ textAlign: "center" }}>Gray Team Design 2019</Footer>
        </Layout>
      </Router>
    );
  }
}

export default Main;
