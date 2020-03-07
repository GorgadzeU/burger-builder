import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggleMenu from '../SideDrawer/ToggleMenu/ToggleMenu';

const Toolbar = props => (
    <header className={classes.Toolbar}>
        <ToggleMenu clicked={props.openSideDrawer}/> 
        <Logo height='80%'/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default Toolbar;