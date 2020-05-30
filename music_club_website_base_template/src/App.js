import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
=======
// import './App.css';
>>>>>>> b330c69e2f98539e2cdab9ef8e4f7f09bdbae6f9
import 'bootstrap/dist/css/bootstrap.css';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';

import Home from './components/Home/Home';
<<<<<<< HEAD
import Timeline from './components/Timeline/Timeline'
=======
>>>>>>> b330c69e2f98539e2cdab9ef8e4f7f09bdbae6f9

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
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
