import React from 'react';
import './Dashboard.css';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Form from '../Form/Form';
import List from '../List/List';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            user: '',
            list: [
                {id: 1, nickname: 'a', email: 'a@gmail.com', ipAddress: '123.123.123.123'},
                {id: 2, nickname: 'b', email: 'b@gmail.com', ipAddress: '213.213.213.213'},
                {id: 3, nickname: 'c', email: 'c@gmail.com', ipAddress: '321.321.321.321'},
                {id: 4, nickname: 'test', email: 'test@gmail.com', ipAddress: '123.123.123.123'}
            ]
        }
    }

    addToList() {
        this.setState(prevState => ({
            list: [...prevState.list, prevState.user]
        }))
    }

    handleState(post) {
        post.id = this.state.id;
        this.setState({
            user: post,
            id: this.state.id + 1
        });
    }

    checkList(post) {
        if (this.state.list.findIndex(x => x.email === post.email) === -1 && this.state.list.findIndex(x => x.email === post.email) === -1) {
            this.handleState(post);
            this.addToList();
            alert('User has been added');
        } else {
            alert('This user already exists!');
        }
    }

    getUser(post) {
        this.checkList(post);
    }

    deleteUser(id) {
        const position = this.state.list.findIndex(x => x.id === id);
        const list = [...this.state.list];
        if (position !== -1) {
            list.splice(position, 1);
            this.setState({
                list: list
            });
        }
    }

    deleteUsers(bool) {
        if (bool) {
            this.setState({
                list: []
            })
        }
    }

    sortUsers(sortBy) {
        if (sortBy != 'default') {
            const list = this.state.list.sort(function(a, b){
                if(a[sortBy] < b[sortBy]) { return -1; }
                if(a[sortBy] > b[sortBy]) { return 1; }
                return 0;
            });
            this.setState({
                list: list
            });
        }
    }

    render() {
        return (
            <Router>
                <Nav/>
                <div className="app-inner">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/add-user" exact component={() => <Form getUser={this.getUser.bind(this)} />}/>
                        <Route path="/user-list" exact component={() => <List sortUsers={this.sortUsers.bind(this)} deleteUsers={this.deleteUsers.bind(this)} deleteUser={this.deleteUser.bind(this)} list={this.state.list} />}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default Dashboard;