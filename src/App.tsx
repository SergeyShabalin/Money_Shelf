import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import Counter from "./components/Counter";
import './index.scss'
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Счетчик</Link>
            <Link to={'/main'}>Главная</Link>
            <Link to={'/about'}>О странице</Link>
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