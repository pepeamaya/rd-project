import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import React from 'react';
import { AccessProvider } from './contexts/AccessContext';

function App() {
  return (
    <AccessProvider>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </AccessProvider>
  );
}

export default App;
