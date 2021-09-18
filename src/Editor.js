import React from "react";

function Editor({inputValue, changeInput}){
  return (
    <>
    <div>
      <textarea
        value={inputValue}
        cols={60}
        rows={30}
        onChange={changeInput}
        id="editor"
      />
    </div>
    </>
  )
}

export default Editor;