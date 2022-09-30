import Notepad from './Notepad';
import React, { useState } from 'react';
import Buttons from './Buttons';

function App() {
  const STORAGE_KEY = 'notepadApp.notes';
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [])
  const [selectedNotes, setSelectedNotes] = useState([]);

  return (
    <header>
      <div className="App container">
        <h4 className="header">My Notes:</h4>
        <Buttons STORAGE_KEY={STORAGE_KEY} notes={notes} setNotes={setNotes} selectedNotes={selectedNotes} setSelectedNotes={setSelectedNotes} />
        <Notepad selectedNotes={selectedNotes} setSelectedNotes={setSelectedNotes} notesList={notes}/>
      </div>
      <div className="container2" hidden>
        <h4 className="header2">Note Details:</h4>
      </div>
    </header>
  );
}

export default App;
