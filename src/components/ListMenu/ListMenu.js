import React from 'react';
import './ListMenu.css';
import PropTypes from 'prop-types';

class ListMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: 'start'
        }
    }

    deleteUsers() {
        if (window.confirm('Are you sure you want to delete ALL users?')) {
            this.props.deleteUsers(true);
        }
    }

    sortUsers(event) {
        this.setState({
            select: event.target.value
        });
        this.props.sortUsers(event.target.value);
    }

    render() {
        return (
            <div className="list-holder">
                <button className="delete-users" onClick={this.deleteUsers.bind(this)}>Delete All Users</button>
                <select value={this.state.select} className="sort-users" onChange={this.sortUsers.bind(this)}>
                    <option value="start" disabled hidden>Sort By</option>
                    <option value="id">Default</option>
                    <option value="nickname">Nickname</option>
                    <option value="email">Email</option>
                    <option value="ipAddress">IP address</option>
                </select>
            </div>
        );
    }
}
export default ListMenu;

ListMenu.protoTypes = {
    deleteUsers: PropTypes.func,
    sortUsers: PropTypes.func
}