import {someF} from "./test";
import {render} from "react-dom";
import React from "react";
import App from "./App";


someF('111')
render(
    <App/>,
    document.getElementById('root')
)