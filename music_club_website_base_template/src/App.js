import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
import AboutClub from './components/About/AboutClub';
import AboutTeam from './components/About/AboutTeam';
import Login from './components/login/Login';
import Admin from './components/login/Admin';
import Logout from './components/login/Logout';
import Navbar from './components/Navbar/Navbar'

// const Home = React.lazy(() => import('./components/Home/Home'));
// const Timeline = React.lazy(() => import('./components/Timeline/Timeline'));
// const Event = React.lazy(() => import('./components/Gallery/Events/event'));
// const Gallery = React.lazy(() => import('./components/Gallery/Mixed/gallery'));
// const Login = React.lazy(() => import('./components/login/Login'));
// const Admin = React.lazy(() => import('./components/login/Admin'));
// const Logout = React.lazy(() => import('./components/login/Logout'));

import CreateEvent from './components/admin/create_event';
import UpdateEvent from './components/admin/update_event';
import DeleteEvent from './components/admin/delete_event';
import PassChange from './components/admin/change_password';
import DeletePhoto from './components/admin/delete_photo';
import Lineup from './components/admin/lineup';
import AddLineup from './components/admin/add_lineup'
import AddPhoto from './components/admin/addPhoto';
import ConfirmDelete from './components/admin/confirm_delete';
import NotFound from './components/admin/Not_found'
import Register from './components/admin/regs'

class App extends Component {
  render() {
    return (
      //the <Nav/> goes above the Switch if navbar is at top
      //add your component to this by Route path = "/{component name}"
      <SimpleReactLightbox>
         <Navbar /> 
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/timeline" component={Timeline} exact/>
              <Route path="/event/:id" component={Event} exact/>
              <Route path="/gallery" component={Gallery} exact/>
              <Route path="/about-club" component={AboutClub} exact/>
              <Route path="/about-team" component={AboutTeam} exact/>
              <Route path="/login" component={Login} exact/>
              <Route path="/logout" component={Logout} exact/>
              <Route path="/admin" component={Admin} exact/>
              <Route path="/admin/create_event" component={CreateEvent} exact/>
              <Route path="/admin/change_event" component={UpdateEvent} exact/>
              <Route path="/admin/delete_event" component={DeleteEvent} exact/>
              <Route path="/admin/change_password" component={PassChange} exact/>
              <Route path="/admin/lineup" component={Lineup} exact/>
              <Route path="/admin/add_lineup" component={AddLineup} exact/>
              <Route path="/admin/delete_photo" component={DeletePhoto} exact/>
              <Route path="/admin/add_photo" component={AddPhoto} exact/>
              <Route path="/admin/delete_photo/confirm_delete" component={ConfirmDelete} exact/>
              <Route path="/admin/delete_photo/not_found" component={NotFound} exact/>
              <Route path="/admin/regs" component={Register} exact/>
            </Switch>
          </div>
        </BrowserRouter>
      </SimpleReactLightbox>
    );
  }
}

export default App;
