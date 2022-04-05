/***************
App component :
****************
This is the App component is used to Route to all the pages with the help of React-router-dom.
It routes to the login and the Dashboard page. There is also a Protected route to
protect certain routes in our application from users who don't have the proper authentication.
 **************/

//IMPORT SCRIPTS
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Login from "./components/Login/Login";
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
      //React-router-dom usage
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <ProtectedRoute path="/dashboard">
                    <Dashboard/>
                </ProtectedRoute>
                <Route exact path="/">
                    <Redirect exact from="/" to="dashboard"/>
                </Route>
                <Route path="*">
                    <Redirect from="/" to="dashboard"/>
                </Route>
            </Switch>
        </Router>
    );
}