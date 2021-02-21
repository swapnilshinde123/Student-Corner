import React from 'react'
import Navbar from "./Navbar"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home_page from "./Home_page"
import "./App.css"
import Class_list from './class_list';
import Class_profile from './Class_profile';
import Profile_create from './Profile_create';
function App() {
  return (
    <div>
   <Router>
     <Switch>
       <Route exact path="/">
         <Navbar/>
         <Home_page/>
       </Route>
       <Route exact path="/class_list">
         <Navbar/>
         <Class_list/>
       </Route>
       <Route exact path="/Class_profile">
         <Navbar/>
         <Class_profile/>
       </Route>
       <Route exact path="/Profile_create">
         <Navbar/>
         <Profile_create/>
       </Route>
     </Switch>
   </Router>
   
    </div>
  )
}

export default App
