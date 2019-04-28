import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    console.log(this.state)
    return (
      <div className="login-content">
        <div className="center-div">
          <div style={{ marginTop: "30px" }}><h2>CIMEMEX</h2></div>
          <div style={{ marginTop: "15px", marginBottom: "10px" }}>
            <input
              type="text"
              className="login-field"
              value={email}
              placeholder="Correo electronico"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <input
              type="password"
              className="login-field"
              value={password}
              placeholder="Contraseña"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div style={{ marginTop: "30px", marginBottom: "10px" }}>
            <button
              type="button"
              className="btn"
              onClick={() => console.log('Le di click al boton')}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
