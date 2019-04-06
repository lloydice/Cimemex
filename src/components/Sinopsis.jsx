import React, { Component } from 'react';
import { Badge } from 'antd';

import { getPelicula } from '../request';

class Sinopsis extends Component {
  state = {
    movie: {}
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    getPelicula(params.id)
      .then(res => {
        const [movie] = res.data;
        this.setState({ movie: movie || {} });
      }).catch((error) => console.log(error))
  }

  render() {
    const { movie } = this.state;
    const { imagen, nombre, duracion, clasificacion, genero } = movie;
    const { sinopsis, reparto } = movie;
    return (
      <div style={{ height: '100rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ float: 'left', margin: '20px' }}>
        <img
          height="350"
          alt="example"
          src={imagen}
        />
        </div>
        <div style={{ float: 'left', margin: '20px' }}>
        <h2>{nombre}</h2>
        <Badge count={`${duracion} minutos`} style={{ margin: '10px', marginLeft: '0px', backgroundColor: '#001529' }} />
        <Badge count={clasificacion} style={{ margin: '10px', backgroundColor: '#001529' }} />
        <Badge count={genero} style={{ margin: '10px', backgroundColor: '#001529' }} />
        <div style={{ marginTop: '10px', maxWidth: '350px' }}>{sinopsis}</div>
        <div style={{ marginTop: '10px' }}>
          <h3>Reparto</h3>
          <h5>{reparto}</h5>
        </div>
        </div>
      </div>
    );
  }
}

export default Sinopsis;
