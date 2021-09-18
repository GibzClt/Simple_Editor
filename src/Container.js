import React from "react";
import Editor from "./Editor";
import Previewer from "./Previewer";
import {createStore} from "redux";
import { Provider } from "react-redux";
import { connect } from "react-redux";

const defaultCode = "Heres some code, `<div></div>`, between 2 backticks."
const defaultMultiLineCode = `
  \`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  `

  const defaultInputValue = `# Welcome to my React Markdown Previewer!
  ## This is a sub-heading...
  ### And here's some other cool stuff:
  ${defaultCode}
  You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
${defaultMultiLineCode}
  `;

const initalState={
  value : defaultInputValue
}

const INPUT_CHANGE = "INPUT_CHANGE";

const actionCreator=(e)=>{
  const {value} = e.target;
  return {type : INPUT_CHANGE, payLoad : value};
}

const inputReducer = (state=initalState, action) =>{
  switch(action.type){
    case INPUT_CHANGE : return {value : action.payLoad};
    default : return state;
  }
}

const store = createStore(inputReducer);

const mapStateToProp=(state)=>{
  return {
    inputValue : state.value
  }
}

const mapDispatchToProp=(dispatch)=>{
  return {
    changeInput : (e)=>dispatch(actionCreator(e))
  }
}

const ConnectedEditor = connect(mapStateToProp, mapDispatchToProp)(Editor);
const ConnectedProvider = connect(mapStateToProp, mapDispatchToProp)(Previewer);

function Container(){
  return(
    <div>
      <Provider store={store}>
        <ConnectedEditor />
        <ConnectedProvider />
      </Provider>
    </div>
  )
}

export default Container;