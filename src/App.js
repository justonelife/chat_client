import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ChatPage from './components/ChatPage';
import SignUpPage from './components/SignUpPage';
import './css/App.css';

const App = () => {
    return (
        <Router>
            <Route path='/' exact>
                <LoginPage />
            </Route>
            <Route path='/chat'>
                <ChatPage />
            </Route>
            <Route path='/signup'>
                <SignUpPage />
            </Route>
        </Router>
    );
}

export default App;