import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ChatPage from './components/ChatPage';
import SignUpPage from './components/SignUpPage';
import './css/App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/' exact component={LoginPage}></Route>
                <Route path='/chat' component={ChatPage}></Route>
                <Route path='/signup' component={SignUpPage}></Route>
            </Router>
        );
    }
}

export default App;