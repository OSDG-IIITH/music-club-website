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
import CreateEvent from './components/admin/create_event';
import UpdateEvent from './components/admin/update_event';
import DeleteEvent from './components/admin/delete_event';
import PassChange from './components/admin/change_password';

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
              <Route path="/admin/create_event" component={CreateEvent} exact/>   
              <Route path="/admin/change_event" component={UpdateEvent} exact/>   
              <Route path="/admin/delete_event" component={DeleteEvent} exact/> 
              <Route path="/admin/change_password" component={PassChange} exact/>
            </Switch>
          </div>
        </BrowserRouter>
      </SimpleReactLightbox>
    );
  }
}

export default App;
