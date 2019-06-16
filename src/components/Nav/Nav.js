import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className="menu">
                <ul className="menu-links">
                    <NavLink to="/" exact activeClassName="active">
                        <li className="menu-link">Home</li>
                    </NavLink>
                    <NavLink to="/add-user" exact activeClassName="active">
                        <li className="menu-link">Add User</li>
                    </NavLink>
                    <NavLink to="/user-list" exact activeClassName="active">
                        <li className="menu-link">User list</li>
                    </NavLink>
                </ul>
            </nav>
        );
    }
}
export default Nav;