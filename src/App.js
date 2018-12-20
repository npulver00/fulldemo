import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import List from './components/List';
import {Route} from "react-router-dom";

class App extends Component {

  constructor(){
    super();
    this.state ={
      user: null,
    }
  }

  componentDidMount(){
    axios.get("/auth/user-data").then(response =>{
      this.setState({
        user: response.data.user
      })
    })
  }

  login(){
      const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback')
      window.location = `http://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
  }





  render() {
    return (
      <div className="App">
      <div className="auth0-button">
        <button onClick={this.login}>Login</button>
      </div>
        <h1> ~Beautiful Quotes~ </h1>
        
        <Route path="/" component={List}/>

      
      </div>
    );
  }
}

export default App;
