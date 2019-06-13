import React from 'react';
import './User.css';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <tr>
                <td>{this.props.user.nickname}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.ipAddress}</td>
                <td><button className="delete">X</button></td>
            </tr>
        );
    }
}
export default User;