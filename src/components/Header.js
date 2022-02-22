import React from 'react';
import ReactDOM from 'react-dom';
import headerlogo from '../logo.svg';

export default function HeaderComponent(){
    return (
        <div className="headerDiv">
            <header className="header">
                <img src={headerlogo} className="headerlogo"></img>
                <h1>ReactFacts</h1>
            </header>
            <h4 className="headerSubText">React course - Project 1</h4>

            

        </div>
    )
}