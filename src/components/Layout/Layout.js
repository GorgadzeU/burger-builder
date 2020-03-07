import React, {  Component } from 'react';

import Aux from '../../hoc/Auxilliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSidrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSidrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState((pervState) => {
            return {showSidrawer: !pervState.showSidrawer}
        })
    }


    render() {
        return( <Aux>
            <Toolbar openSideDrawer={this.sideDrawerOpenHandler}/>
            <SideDrawer open={this.state.showSidrawer} closed={this.sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>)
    }
}
   


export default Layout;