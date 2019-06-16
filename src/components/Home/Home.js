import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home">
                <h1>Welcome to User Management App</h1>
                <p>Our app will help you add users to the list!</p>
            </div>
        );
    }
}
export default Home;