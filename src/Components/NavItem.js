import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'

class NavItem extends Component {
    render() {
        let {children , to } = this.props            
        return (
            <li>
                <NavLink exact={true} to={to}>{children}</NavLink>
            </li>
        );
    }
}

export default NavItem;