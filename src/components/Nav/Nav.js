import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <nav className="menu">
                <ul className="menu-links">
                    <Link to="/">
                        <li className="menu-link">Home</li>
                    </Link>
                    <Link to="/add-user">
                        <li className="menu-link">Add User</li>
                    </Link>
                    <Link to="/user-list">
                        <li className="menu-link">User list</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}
export default Nav;