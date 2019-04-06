import React, { Component } from "react";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

import { getPeliculas } from '../request';

const { Meta } = Card;

class Movies extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    getPeliculas()
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      }).catch((error) => console.log(error))
  }

  render() {
    const { movies } = this.state;
    const { match } = this.props;

    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
        {
          movies.map((movie) => {
            const { nombre, imagen, duracion, id } = movie;
            return <div style={{ padding: '20px', display: 'flex', justifyContent: 'center' }} key={id}>
              <Link to={`${match.url}sinopsis/${id}`}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      height="350"
                      alt="example"
                      src={imagen}
                    />
                  }
                >
                  <Meta title={nombre} description={`${duracion} minutos`} />
                </Card>
              </Link>
            </div>
          })
        }
      </div>
    );
  }
}

export default Movies;
