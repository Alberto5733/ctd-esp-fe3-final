import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import DentistList from './DentistList';
import DentistDetail from './DentistDetail';
import ContactForm from './ContactForm';
import Favs from './Favs'; 

const App = () => {
  return (
    <Router>
      <div>
        {}
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/dentists">Dentists</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/favs">Favoritos</Link>
            </li>
          </ul>
          {}
          <button>Change Theme</button>
        </nav>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/dentists" component={DentistList} />
          <Route path="/dentist/:id" component={DentistDetail} />
          <Route path="/contacto" component={ContactForm} />
          <Route path="/favs" component={Favs} /> {}
        </Switch>
        {}
        <footer>
          <p>Powered by</p>
          <img src="/images/DH.png" alt="DH-logo" />
          {}
        </footer>
      </div>
    </Router>
  );
};

export default App;
