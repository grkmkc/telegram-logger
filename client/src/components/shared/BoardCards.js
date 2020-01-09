import React, { Fragment } from 'react';

const BoardCards = ({ name, backlog, keyIndex }) => {
  return (
    <Fragment>
      <div className={`${name}-section`} key={keyIndex}>
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
    </Fragment>
  );
};

export default BoardCards;
