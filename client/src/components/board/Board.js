import React from 'react';
import BackLog from '../backlog/BackLog';
import Development from '../development/Development';
import DoneSection from '../doneSection/DoneSection';
import Review from '../review/Review';
import BoardButtons from '../shared/BoardButtons';

function Board() {
  return (
    <div className="main">
      <div className="row wrapper-row row-no_margin">
        <div className="col s3 wrapper-cols">
          <BoardButtons name="Backlog"></BoardButtons>
          <BackLog name="backlog"></BackLog>
        </div>
        <div className="col  s3 wrapper-cols">
          <BoardButtons name="Development"></BoardButtons>
          <Development></Development>
        </div>
        <div className="col  s3 wrapper-cols">
          <BoardButtons name="Done"></BoardButtons>
          <DoneSection></DoneSection>
        </div>
        <div className="col  s3 wrapper-cols">
          <BoardButtons name="Review"></BoardButtons>
          <Review></Review>
        </div>
      </div>
    </div>
  );
}

export default Board;
