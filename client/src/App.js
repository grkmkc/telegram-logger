import React, { useEffect } from 'react';
import './App.css';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import BackLog from './components/backlog/BackLog';
import Development from './components/development/Development';
import DoneSection from './components/doneSection/DoneSection';
import Review from './components/review/Review';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">
      <Header></Header>
      <div className="main">
        <div className="row wrapper-row row-no_margin">
          <div className="col s3 wrapper-cols">
            <BackLog></BackLog>
          </div>
          <div className="col  s3 wrapper-cols">
            <Development></Development>
          </div>
          <div className="col  s3 wrapper-cols">
            <DoneSection></DoneSection>
          </div>
          <div className="col  s3 wrapper-cols">
            <Review></Review>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
