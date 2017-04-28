import React, { Component } from "react";
import { Route, Router, IndexRoute, browserHistory } from "react-router";
import { connect } from "react-redux";
import AuthService from "./utils/AuthService";

//components

import Wrapper from "./components/Wrapper";
import Home from "./components/Home";
import Login from "./components/Login";
import Cal from './components/Cal';


// validate authentication for private routes
import { key1, key2 } from "./keys.js";

const auth = new AuthService(key1, key2);

const requireAuth = (nextState, replace) => {
    if(!auth.loggedIn()) {
        replace({ pathname: "/login" });
    }
};

const mapStateToProps = (state) => ({
    profile: state.profile,
});
export default class App extends Component {
    render() {
        const routes =
        <Route path="/" component={Wrapper} auth={auth}>
        <IndexRoute component={Home}/>
        <Route path="/cal" component={Cal} />
          <Route path="/home" component={Home}/>  
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Login} />
          <Route path="*" component={NotFound} />
       </Route>;
        return(
            <Router history={browserHistory}>     
       {routes} 
       </Router>
        );
    }
}

const Contributions = () => <div> <h1 >Contributors:</h1><ul style={{fontSize: '1.3em'}}><li > 
@weatherfordmat</li><li > 
Contribute to the Project and Your Name Will be Added Here</li></ul></div>;


const ContributorsConnected = connect(mapStateToProps)(Contributions);

const NotFound = () => (<h1 style={{textAlign: 'center', fontSize: '3em'}}> 
<span style={{color: '#808080'}}> 404! </span> <br/> This page was not found!</h1>);