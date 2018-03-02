// @flow
import React from "react";
import ReactDOM from "react-dom";

function ApplicationRoot(){
    return (<div>Hello World!</div>);
}

if(document) {
    const rootElement = document.getElementById("approot");
    if(rootElement){
        ReactDOM.render(<ApplicationRoot/>, rootElement);
    }
}