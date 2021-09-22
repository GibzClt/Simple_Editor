import React from "react";
import "./Editor.css";

function Editor({inputValue, changeInput}){
  return (
    <div id="editor-container">
      <div id="editor-title">
        <p>EDITOR</p>
      </div>
      <textarea
        value={inputValue}
        cols={60}
        rows={30}
        onChange={changeInput}
        id="editor"
      />
    </div>
  )
}

export default Editor;