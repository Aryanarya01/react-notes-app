import React, { useState } from 'react'
 import TextComponent from './TextComponent'
 import Newcomponent from './Newcomponent'
 import UpdateComponent from './UpdateComponent'
 import { v4 as uuidv4 } from 'uuid';
 import App from './App.jsx'
const NotesApp = () => {
  const [noteList, setNoteList] = useState([]);
  const [shouldClear, setShouldClear] = useState(false);
  const [selectNote, setSelectNote] = useState(null);

  // const handelTopButton = ()=>{
  //   setSelectNote(null);
  //   setShouldClear(true);
  // }
  const addNote = (heading, noteText)=>{
    const newNote = {id:uuidv4(),heading, noteText};
    setNoteList([...noteList, newNote]);
  }

  const updateNote = (id,heading,noteText)=>{
    setNoteList(prev=>
      prev.map(note=>
        note.id === id ? {...note,heading,noteText} : note
      )
    )
  }
  const handelDelete = (id)=>{
    
     setNoteList(prev =>
    prev.filter(note => note.id !== id)
  );
      if (selectNote?.id === id) {
    setSelectNote(null);
  }
  }

   return (
    <div> 
      <Newcomponent handelDelete={handelDelete} onNoteClick={setSelectNote} noteList={noteList}   />
      <TextComponent handelDelete={handelDelete} updateNote={updateNote} selectNote={selectNote} setShouldClear={setShouldClear} shouldClear={shouldClear} addNote={addNote} />
    </div>
  )
}

export default NotesApp