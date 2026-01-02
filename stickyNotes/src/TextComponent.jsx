import React, { useEffect, useState } from 'react'
import App from './App.jsx'
const TextComponent = ({addNote,handelDelete, selectNote, updateNote}) => {
  const [notes, setNotes] = useState("");
  const [heading, setHeading] = useState("");
  const [noteId, setNoteId] = useState(null);

  const handelChange = (event)=>{
    setNotes(event.target.value);
  }
  const handelHeading = (event)=>{
    setHeading(event.target.value);
  }

  const handelSubmit =()=>{
    if (heading.trim() === "" || notes.trim() === "") return;
    if(noteId){
      updateNote(noteId,heading,notes);
        setNoteId(null);
    }else{
      addNote(heading, notes);
    }
    setHeading("");
      setNotes("");
  }

  // useEffect(()=>{
  //   if(shouldClear){
  //     setHeading("");
  //     setNotes("");
  //     setNoteId(null);
  //     setShouldClear(false);
  //   }
  // },[shouldClear])
  useEffect(()=>{
    if(selectNote){
      setHeading(selectNote.heading);
      setNotes(selectNote.noteText);
      setNoteId(selectNote.id);
      
    }
  },[selectNote])
  return (
    <>
   <div className='notehead'>
     <input required placeholder='Title here…' style={{fontSize:"1.6rem",outline:"none",margin:"5px",border:"2px solid  rgba(51, 65, 85, 0.7)", borderRadius:"12px",backgroundColor:"rgba(15, 23, 42, 0.85)", color:"#cbd5e1", padding:"12px 16px"}} type="text" value={heading} onChange={handelHeading} />
        <button style={{fontSize:"1.3rem", width:"7rem", height:"3.5rem", marginTop:"10px"}} type="button" class="btn btn-primary" onClick={handelSubmit}>  {noteId ? "Update" : "Add"}</button>
   </div>

      <div className='innertext'>
        <textarea value={notes}
        style={{padding:"12px 16px"}}
        onChange={handelChange}
          className="form-control text"
          placeholder="Start writing your thoughts…"
        ></textarea>
         
      </div>
    </>
  )
}

export default TextComponent
