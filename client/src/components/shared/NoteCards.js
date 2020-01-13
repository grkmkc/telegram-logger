import React from 'react';

function NoteCards({ note, name, keyIndex }) {
  return (
    <div className="card card-m05  material-bg" key={keyIndex}>
      <div className="note-card-buttons">
        <a href="">
          <i class="material-icons" style={{ color: '#5f4645' }}>
            delete
          </i>
        </a>
        <a href="">
          {' '}
          <i class="material-icons" style={{ color: '#eaeaea' }}>
            done
          </i>
        </a>
      </div>
      <div className="card-content white-text">
        <span className="card-title">{note.name}</span>
        <p>{note.content}</p>
      </div>
      {/*  <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div> */}
    </div>
  );
}

export default NoteCards;
