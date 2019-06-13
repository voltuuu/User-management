import React from 'react';
import './ListMenu.css';
import PropTypes from 'prop-types';

class ListMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    deleteUsers() {
        if (window.confirm('Are you sure you want to delete ALL users?')) {
            // this.props.deleteUsers(true);
        }
    }

    render() {
        return (
            <div className="list-holder">
                <button className="delete-users" onClick={this.deleteUsers.bind(this)}>Delete All Users</button>
            </div>
        );
    }
}
export default ListMenu;

ListMenu.protoTypes = {
    deleteUsers: PropTypes.func,
}