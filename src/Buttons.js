import React, { useState } from 'react'
import './css/App.css'
import { v4 as uuidv4 } from 'uuid';

export default function Button({ STORAGE_KEY, notes, setNotes, selectedNotes, setSelectedNotes }) {
    const [inputNote, setInputNote] = useState('');

    function createNote(e) {
        if (inputNote === '') return

        const updatedNotes = [...notes, { id: uuidv4(), name:inputNote, checkbox: false }];
    
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
        setNotes(updatedNotes);

        setInputNote('');
    }

    function removeNote() {
      const updatedNotes = [...notes]
      selectedNotes.forEach(selectedNote => {
        const noteIndex = updatedNotes.findIndex((note) => selectedNote === note.id);
        updatedNotes.splice(noteIndex, 1);
      })
      setSelectedNotes([]);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
      setNotes(updatedNotes);
    }

    function removeAllNotesBtn() {
      const counter = 0;
      const removeAll = [...notes]
      if (counter < removeAll.length) {
        const noteList = setNotes([]);
        localStorage.removeItem(STORAGE_KEY, JSON.stringify(noteList));
      }
    }
  return (
    <div className="inputContainer">
      <input value={ inputNote } onChange={(e) => setInputNote(e.target.value)} type="text" />
      <button onClick={ createNote }>Add note</button>
      <button onClick={ removeNote }>Remove note</button>
      <button onClick={ removeAllNotesBtn }>Remove all notes</button>
    </div>
  )
}
