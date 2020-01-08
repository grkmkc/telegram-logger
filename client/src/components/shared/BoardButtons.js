import React, { Fragment } from 'react';

const BoardButtons = ({ name }) => {
  return (
    <Fragment>
      <h6 className="center-align wrapper-cols-h">{name}</h6>
    </Fragment>
  );
};

export default BoardButtons;
