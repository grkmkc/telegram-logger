import React, { useState, useEffect } from 'react';
import NoteCards from '../shared/NoteCards';
import DoneNotes from './DoneNotes';
import DeletedNotes from './DeletedNotes';
import noteService from '../../services/noteService';

const Notes = ({ name }) => {
  const [notes, setnotes] = useState(null);

  useEffect(() => {
    if (!notes) {
      getNotes();
    }
  });
  const getNotes = async () => {
    let res = await noteService.getAll();
    console.log(res);
    setnotes(res);
  };
  return (
    <div className="main">
      <div className="row row-no_margin">
        <DoneNotes></DoneNotes>
        <div className="col s12 m6 l4">
          <h5 className="wrapper-cols-h center-align">Open Notes</h5>
          {notes ? (
            notes.map((note, key) => (
              <NoteCards
                name={name}
                note={note}
                keyIndex={key}
                key={key}
              ></NoteCards>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <DeletedNotes></DeletedNotes>
      </div>
    </div>
  );
};

export default Notes;
