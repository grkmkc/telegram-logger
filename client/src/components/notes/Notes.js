import React, { useState, useEffect } from 'react';
import NoteCards from '../shared/NoteCards';
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
      <div>
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
    </div>
  );
};

export default Notes;
