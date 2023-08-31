import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';

import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import './styles/index.scss'



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О странице</Link>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/main' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;