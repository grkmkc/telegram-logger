import React, { useState, useEffect } from 'react';
import backlogService from '../../services/backlogService';
import BoardCards from '../shared/BoardCards';

const BackLog = ({ name }) => {
  const [backlogs, setbacklogs] = useState(null);

  useEffect(() => {
    if (!backlogs) {
      getBacklogs();
    }
  });
  const getBacklogs = async () => {
    let res = await backlogService.getAll();
    console.log(res);
    setbacklogs(res);
  };
  return (
    <div>
      {backlogs ? (
        backlogs.map((backlog, key) => (
          <BoardCards
            name={name}
            backlog={backlog}
            keyIndex={key}
            key={key}
          ></BoardCards>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default BackLog;
