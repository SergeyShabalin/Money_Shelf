import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher className={''}/>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.RED} to={'/'} className={cls.main_link}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.RED} to={'/about'}>О странице</AppLink>
            </div>
        </div>
    );
};
