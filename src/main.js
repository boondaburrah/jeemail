// @flow
import React from "react";
import ReactDOM from "react-dom";
import AppUI from "./uiPC";

const rootElement = document.getElementById("approot");
if(rootElement){
    ReactDOM.render(<AppUI/>, rootElement);
}
