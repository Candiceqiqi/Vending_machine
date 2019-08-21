import React, {Component} from 'react';
import {Switch, Route, NavLink} from "react-router-dom";
import Home from './home';
import Chips from './chips';
import Fish from './fish';

class Vendor extends Component{



    render() {
        return (
             <div className="menu"> 
           
             <Switch>
                 <Route exact path='/dog' render={()=><Chips/>}/>
                 <Route exact path='/home' render={()=><Home/>}/>
                
                 <Route exact path='/fish' render={()=><Fish/>}/>
             
                 </Switch>

             </div>
        );
    }
}
export default Vendor;