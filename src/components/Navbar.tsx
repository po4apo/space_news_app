import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar:React.FunctionComponent = () => (
    <div className="wrapper clearfix">

        <a href="/" id="logo">
            <img src="https://spaceflightnewsapi.net/img/SNAPI_logo.png" alt=""></img>
        </a>

        <nav>
            <ul id="nav" className="sf-menu">
                <li><NavLink to="/news">Главная</NavLink></li>
                <li><NavLink to="/about">О проекте</NavLink></li>
            </ul>
            <div id="combo-holder"></div>
        </nav>
    </div>
)