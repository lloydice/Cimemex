import React, { Component } from "react";
import { Card, Col, Row } from "antd";

const { Meta } = Card;

class Movies extends Component {
  render() {
    return (
      <Row gutter={32}>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://static.cinepolis.com/img/peliculas/30669/1/1/30669.jpg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://static.cinepolis.com/img/peliculas/30475/1/1/30475.jpg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>

        <Col span={6}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="https://static.cinepolis.com/img/peliculas/30470/1/1/30470.jpg"
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </Col>
        <Col span={6} />
      </Row>
    );
  }
}

export default Movies;
