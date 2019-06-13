import React from 'react';
import './List.css';
import User from '../User/User';
import PropTypes from 'prop-types';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    render() {
        return (
            <div className="list">
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
                        <User user={{nickname: 'Edgars', email: 'edgars@gmail.com', ipAddress: '123.123.123.123'}}/>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default List;

List.protoTypes = {
    obj: PropTypes.object,
}