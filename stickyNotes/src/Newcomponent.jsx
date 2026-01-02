import React from "react";
import App from "./App.jsx";
const Newcomponent = ({ noteList, handelDelete, onNoteClick }) => {
  return (
    <div className="noteList">
      <h2 className="mx-5 my-2" style={{fontWeight:"800",color:"#f8fafc"}}>MindPad</h2>
      <p className="mx-4" style={{color:"#f8fafc"}}>All your thoughts, saved securely</p>
      <hr className="mt-4" style={{padding:"1rem"}}/>
      {noteList.map((item, id) => (
        <div className="note" onClick={() => onNoteClick(item)} key={item.id}>
          <h4>{item.heading}</h4>
          <p><b>{item.noteText}</b></p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // note select nahi hoga
              handelDelete(item.id); // sirf ye note delete hoga
            }}
            type="button"
            class="btn btn-primary delete"
            
          >
            {" "}
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Newcomponent;
