import React,{Component} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//  login page style
import './components/login/style.css'
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';

import Home from './components/Home/Home'
import Timeline from './components/Timeline/Timeline'
import Login from './components/login/Login'
import Admin from './components/login/Admin'
import Logout from './components/login/Logout'

class App extends Component {
  render(){
    return(
      //the <Nav/> goes above the Switch if navbar is at top
      //add your component to this by Route path = "/{component name}"
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/timeline" component={Timeline} exact/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/logout" component={Logout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
