import React from 'react';

import classes from './ToggleMenu.css';

const ToggleMenu = (props) => (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default ToggleMenu;