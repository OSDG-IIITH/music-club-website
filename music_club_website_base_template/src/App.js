import React,{Component} from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox'

// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';

import Home from './components/Home/Home';
 import Timeline from './components/Timeline/Timeline';
import Event from './components/Gallery/Events/event';
 import Gallery from './components/Gallery/Mixed/gallery';
 import Login from './components/login/Login';
 import Admin from './components/login/Admin';
 import Logout from './components/login/Logout';


class App extends Component {
  render(){
    return(
      //the <Nav/> goes above the Switch if navbar is at top
      //add your component to this by Route path = "/{component name}"
      <SimpleReactLightbox>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/timeline" component={Timeline} exact/>
               <Route path="/event" component={Event} exact/>
              <Route path="/gallery" component={Gallery} exact/>  
              <Route path="/login" component={Login} exact/>  
              <Route path="/logout" component={Logout} exact/>  
              <Route path="/admin" component={Admin} exact/>   
            </Switch>
          </div>
        </BrowserRouter>
      </SimpleReactLightbox>
    );
  }
}

export default App;
