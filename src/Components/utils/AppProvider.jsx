import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppContext'; 
import Home from './Home';
import DentistList from './DentistList';
import DentistDetail from './DentistDetail';
import ContactForm from './ContactForm';
import Favs from './Favs';

const App = () => {
return (
    <AppProvider>
    <Router>
        <div>
        {}
        </div>
    </Router>
    </AppProvider>
);
};

export default App;
