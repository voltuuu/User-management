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
        this.props.callback(id);
    }

    render() {
        return (
            <div className="list">
                <ListMenu/>
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
                            <User callback={this.deleteUser.bind(this)} key={user.id} id={user.id} user={user}/>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default List;

List.protoTypes = {
    list: PropTypes.array,
    callback: PropTypes.func
}