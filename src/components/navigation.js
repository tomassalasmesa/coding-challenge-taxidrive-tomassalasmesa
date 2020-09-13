import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Register from '../components/registro';
import App from '../App'
import LogoTD from '../img/logoTD.png';
import '../App.css';

function Navigation() {
  return (
    <Router>
    <div className="Navigation">
      <header>
      
        <nav className="navbar navbar-light">
        
        <div className="btnList">
        <img src={LogoTD} className="LogoTD" alt="logotd" />
        <Link to="/">
          <button className="btn btn-outline-dark">Quienes Somos?</button>
        </Link>
        </div>
        <div className="row">
            <h3 className="textRegister">Quiere registarse como Conductor?</h3>
            <Link to="/register">
            <button className="btn btn-outline-dark" id="btnregister">Registrarse</button>
            </Link>      
        </div>
        </nav>
      </header>
      <div className="App">
          <div id="cont">
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={App} />
          </div>
        </div>
    </div>
    </Router>
  );
}

export default Navigation;