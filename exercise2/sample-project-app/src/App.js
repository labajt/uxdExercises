import React, { Component } from 'react';
import './App.css';
import UsersListView  from './UsersListView.js';
import UserDetailsView from './UserDetailsView';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
      <PageHeader className="App-header">
        Sample Project  
      </PageHeader>
      <Router>
        <div> 
            <Route exact path="/" component={UsersListView} /> 
            <Route path="/user/:id" component={UserDetailsView}/>  
        </div>
      </Router>
      </div>
    );
  }
}

export default App;