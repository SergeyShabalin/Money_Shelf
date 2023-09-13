import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink} from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink to={'/'} className={cls.main_link}>Главная</AppLink>
                <AppLink to={'/about'}>О странице</AppLink>
            </div>
        </div>
    );
};


