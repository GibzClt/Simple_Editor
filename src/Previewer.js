import React, { useEffect } from "react";
import "./Previewer.css"
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
    <div id="preview">
    </div>
  )
}

export default Previewer;