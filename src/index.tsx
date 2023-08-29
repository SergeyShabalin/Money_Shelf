import {someF} from "./test";
import {render} from "react-dom";
import React from "react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


someF('111')
render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
)