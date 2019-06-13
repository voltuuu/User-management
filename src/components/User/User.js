import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    deleteUser() {
        if (window.confirm('Are you sure you want to delete this user?')) {
            this.props.callback(this.props.id);
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.nickname}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.ipAddress}</td>
                <td><button onClick={this.deleteUser.bind(this)} className="delete">X</button></td>
            </tr>
        );
    }
}
export default User;

User.protoTypes = {
    callback: PropTypes.func,
}