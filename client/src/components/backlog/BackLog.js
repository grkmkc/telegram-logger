import React, { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import backlogService from '../../services/backlogService';

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
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div style={{ overflow: 'hidden', clear: 'both' }}>
      <div ref={drag} style={{ opacity }}>
        {backlogs ? (
          backlogs.map((backlog, key) => (
            <div className="backlog-section" key={key}>
              <div className="row row-no_margin">
                <div className="col s12">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text no-padding">
                      <span className="card-title section-card-title">
                        {backlog.name}
                      </span>
                      <div className="p-1">{backlog.issue}</div>
                      <div className="tagsWrapper">
                        {backlog.tags
                          ? backlog.tags.map((tag, key) => (
                              <span
                                key={key}
                                className="tagsStyle"
                                style={{ backgroundColor: tag.metaData.color }}
                              >
                                {tag.name}
                              </span>
                            ))
                          : ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default BackLog;
