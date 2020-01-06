import React, { Component } from 'react';

export class BackLog extends Component {
  render() {
    return (
      <div className="backlog-section">
        <div className="row row-no_margin">
          <div className="col s12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text no-padding">
                <span className="card-title section-card-title">
                  Card Title
                </span>
                <div className="p-1">
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BackLog;
