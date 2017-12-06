import React, { Component } from 'react';
import { content } from '../../data/content';
import Post, { Quote } from '../Post';
import logo from '../../images/logo.png';
import danbot from '../../images/danbot.png';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div className="App-content">
                    <Quote data={{ text: 'Have you heard about Danpal?' }} />
                    <img className="danbot" src={danbot} alt="Beep boop I'm Danbot" />
                    {content.map((data, index) => <Post data={data} />)}
                </div>
            </div>
        );
    }
}

export default App;
