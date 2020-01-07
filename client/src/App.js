import React, { useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
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
        <DndProvider backend={Backend}>
          <div className="row wrapper-row row-no_margin">
            <div className="col s3 wrapper-cols">
              <h6 className="center-align wrapper-cols-h">Backlog</h6>
              <BackLog name="backlogCards"></BackLog>
            </div>
            <div className="col  s3 wrapper-cols">
              <h6 className="center-align wrapper-cols-h">Development</h6>
              <Development></Development>
            </div>
            <div className="col  s3 wrapper-cols">
              <h6 className="center-align wrapper-cols-h">Done</h6>
              <DoneSection></DoneSection>
            </div>
            <div className="col  s3 wrapper-cols">
              <h6 className="center-align wrapper-cols-h">Review</h6>
              <Review></Review>
            </div>
          </div>
        </DndProvider>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
