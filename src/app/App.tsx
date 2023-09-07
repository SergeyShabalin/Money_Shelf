import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import './styles/index.scss'
import {AppRouter} from "app/providers/router";



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О странице</Link>
            <button onClick={toggleTheme}>Сменить тему</button>
            <AppRouter/>
        </div>
    );
};

export default App;