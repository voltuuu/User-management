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
            list: []
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

    render() {
        return (
            <Router>
                <Nav/>
                <div className="app-inner">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/add-user" exact component={() => <Form callback={this.getUser.bind(this)} />}/>
                        <Route path="/user-list" exact component={() => <List callback={this.deleteUser.bind(this)} list={this.state.list} />}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default Dashboard;