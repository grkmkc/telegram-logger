import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import LandingPage from './components/landing/LandingPage';
import Board from './components/board/Board';
import Notes from '../src/components/notes/Notes';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Switch>
          <Route path="/board">
            <Board />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
