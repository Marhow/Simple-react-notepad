import React from 'react'

export default function Notepad({notesList, selectedNotes, setSelectedNotes }) {

  function toggleNote(isChecked, id) {
    const updatedSelectedNotes = [...selectedNotes];
    if(isChecked) {
      updatedSelectedNotes.push(id);
    }
    else {
      const noteIndex = selectedNotes.indexOf(id);
      updatedSelectedNotes.splice(noteIndex, 1);
    }
    setSelectedNotes(updatedSelectedNotes);
  }

  if (notesList.length === 0) {
    return <div className="no-note">No notes yet.</div>
  }

 
  return (
    notesList.map(note => {
        return (
          <div key={'key-' + note.id}>
            <input type="checkbox" id={note.id + '-checkbox'} checked={selectedNotes.indexOf(note.id) > -1} onChange={(e) => toggleNote(e.target.checked, note.id)} />
            <label htmlFor={note.id + '-checkbox'} id={note.id}> {note.name}</label>
          </div>
        )   
    })
  )
}
