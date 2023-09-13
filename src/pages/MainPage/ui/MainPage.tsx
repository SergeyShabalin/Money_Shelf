import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from  './MainPage.module.scss';

const MainPage = () => {
    return (
        <div className={classNames(cls.MainPage, {}, [])}>
          <h1>Main</h1>

        </div>
    );
};

export default MainPage;