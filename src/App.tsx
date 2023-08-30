import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Counter from "./components/Counter";

import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {useTheme} from "./theme/useTheme";

import './styles/index.scss'

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Счетчик</Link>
            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О странице</Link>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<Counter/>}/>
                    <Route path='/main' element={<MainPageAsync/>}/>
                    <Route path='/about' element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;