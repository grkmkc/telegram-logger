import React, { useState, useEffect, useCallback } from 'react';
import update from 'immutability-helper';
import { useDrag } from 'react-dnd';
import BackLogCards from './BackLogCards';
import backlogService from '../../services/backlogService';

const BackLog = ({ name }) => {
  const [backlogs, setbacklogs] = useState(null);
  const [indexId, setindexid] = useState(0);

  useEffect(() => {
    if (!backlogs) {
      getBacklogs();
    }
  });
  const getBacklogs = async () => {
    let res = await backlogService.getAll();
    console.log(res);
    setbacklogs(res);
    setindexid(res.length);
  };

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = backlogs[dragIndex];
      setbacklogs(
        update(backlogs, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragCard]
          ]
        })
      );
    },
    [backlogs]
  );

  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'card' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const renderCard = (backlog, index) => {
    return (
      <BackLogCards
        key={backlog.index}
        index={index}
        id={backlog.id}
        moveCard={moveCard}
        backlog={backlog}
      />
    );
  };

  return (
    <div className="row row-no_margin" style={{ height: '100%' }}>
      <div className="col s12" style={{ height: '100%' }}>
        {backlogs ? backlogs.map((backlog, i) => renderCard(backlog, i)) : ''}
      </div>
    </div>
  );
};

export default BackLog;
