import React, { useState, useEffect } from 'react';
import backlogService from '../../services/backlogService';

const BackLog = () => {
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
          <div className="backlog-section" key={key}>
            <div className="row row-no_margin">
              <div className="col s12">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text no-padding">
                    <span className="card-title section-card-title">
                      {backlog.name}
                    </span>
                    <div className="p-1">{backlog.issue}</div>
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
  );
};

export default BackLog;
