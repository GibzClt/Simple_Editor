import React, { useEffect } from "react";
import "./Preview.css"
import marked from "marked";

function Previewer({inputValue}){
  useEffect(()=>{
    let contentArr = inputValue.split("");
    let newContentArr = contentArr.map(item=>{
      if(item === "\n"){
        return "  \n";
      }
      return item;
    })
    document.getElementById("preview").innerHTML = marked(newContentArr.join(""));
  }, [inputValue])
  return (
    <div id="preview-container">
      <div id="preview-title">
          <p>PREVIEW</p>
        </div>
      <div id="preview">
      </div>
    </div>
  )
}

export default Previewer;