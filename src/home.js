import React, {Component} from 'react';
import {Switch, Route, NavLink} from "react-router-dom";


class Home extends Component{


    render() {
        return (
             <div>
                   <nav>
                 <NavLink exact to='./home'>Home</NavLink>
                 <NavLink exact to='./dog'>Dog</NavLink>
                 <a href='./dog'>Fish2</a>
                 <NavLink exact to='./fish'>Fish</NavLink>
             </nav>
                 Here is home page
             </div>
        );
    }
}
export default Home;