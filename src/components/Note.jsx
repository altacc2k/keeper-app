import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.delItem(props.id)}>
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}

export default Note;
