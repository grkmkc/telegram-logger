import React from 'react';

function NoteCards({ note, name, keyIndex }) {
  return (
    <div className="row row-no_margin">
      <div className="col offset-m3 s12 m6 l4 offset-l4">
        <div className="card card-m05  material-bg" key={keyIndex}>
          <div className="card-content white-text">
            <span className="card-title">{note.name}</span>
            <p>{note.content}</p>
          </div>
          {/*  <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NoteCards;
