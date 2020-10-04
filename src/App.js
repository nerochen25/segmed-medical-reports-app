import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ReportList from './components/ReportList';
import Report from './components/Report';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App wrapper">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ReportList} />
          <Route path="/reports/:id" component={Report} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
