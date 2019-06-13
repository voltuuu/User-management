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
            user: ''
        }
    }

    passObj(obj) {
        this.setState({
            user: obj
        });
    }

    render() {
        return (
            <Router>
                <Nav/>
                <div className="app-inner">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/add-user" exact component={() => <Form callback={this.passObj.bind(this)} />}/>
                        <Route path="/user-list" exact component={() => <List obj={this.state.user} />}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default Dashboard;