import {someF} from "./test";
import {render} from "react-dom";
import React from "react";
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";



someF('111')
render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)