import React, { useEffect } from "react";
import "./Previewer.css"
import marked from "marked";

function Previewer({content}){
  useEffect(()=>{
    let contentArr = content.split("");
    let newContentArr = contentArr.map(item=>{
      if(item === "\n"){
        return "  \n";
      }
      return item;
    })
    document.getElementById("preview").innerHTML = marked(newContentArr.join(""));
  }, [content])
  return (
    <div id="preview">
      {/* {marked(content)} */}
    </div>
  )
}

export default Previewer;