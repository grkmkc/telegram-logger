import React, { Fragment } from 'react';
import './css/BoardButton.css';

const BoardButtons = ({ name }) => {
  return (
    <Fragment>
      <div
        className="board-button-wrapper wrapper-cols-h"
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <h6 className="center-align" style={{ width: '100%' }}>
          {name}
        </h6>
        <a className="custom-remove-button">
          <i className="tiny-20 material-icons">search</i>
        </a>
        <a className="custom-remove-button">
          <i className="tiny-20 material-icons">delete</i>
        </a>
        <a className="custom-add-button">
          <i className="tiny-20 material-icons">add</i>
        </a>
      </div>
    </Fragment>
  );
};

export default BoardButtons;
