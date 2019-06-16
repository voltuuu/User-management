import React from 'react';
import './List.css';
import User from '../User/User';
import ListMenu from '../ListMenu/ListMenu';
import PropTypes from 'prop-types';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        this.setState({
            users: this.props.list
        })
    }

    deleteUser(id) {
        this.props.deleteUser(id);
    }

    deleteUsers(bool) {
        this.props.deleteUsers(bool);
    }

    sortUsers(sortBy) {
        this.props.sortUsers(sortBy);
    }

    render() {
        return (
            <div className="list">
                <ListMenu deleteUsers={this.deleteUsers.bind(this)} sortUsers={this.sortUsers.bind(this)}/>
                <div className="list-inner">
                    <table className="list-table">
                        <thead className="list-head">
                            <tr>
                                <th>Nickname</th>
                                <th>Email</th>
                                <th>IP address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="list-body">
                            {this.state.users.map(user =>
                                <User deleteUser={this.deleteUser.bind(this)} key={user.id} id={user.id} user={user}/>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default List;

List.protoTypes = {
    list: PropTypes.array,
    deleteUser: PropTypes.func,
    deleteUsers: PropTypes.func,
    sortUsers: PropTypes.func
}