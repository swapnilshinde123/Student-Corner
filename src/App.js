

import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Home from"./Home";
import Upload from "./Upload"
import Menu from "./Menu"
import Navbar from "./Navbar"
import Profile_create from "./Profile_create";
import Profile from "./Profile";
// import Upload from "./Upload/main"
function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navbar/>
                        <Home/>

                    </Route>
                    <Route exact path="/Menu">
                    <Navbar/>
                        <Menu/>
                       <Upload />
                    </Route>
                    <Route exact path="/Profile_create">
                       <Navbar/>
                       <Profile_create/>
                        
                    </Route>
                    <Route exact path="/Profile">
                       <Navbar/>
                       <Profile/>
                        
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App

