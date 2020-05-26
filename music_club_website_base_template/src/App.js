import React,{Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//@ts-ignore
import 'bootstrap/dist/js/bootstrap';
// to import react-bootstrap import {...} from 'react-bootstrap'
import 'jquery';
import 'popper.js';

import Home from './components/Home';

class App extends Component {
  render(){
    return(
      //the <Nav/> goes above the Switch if navbar is at top
      //add your component to this by Route path = "/{component name}"
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
