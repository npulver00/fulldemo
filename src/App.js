import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import List from "./components/List";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "./redux/reducer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    axios.get("/auth/user-data").then(response => {
      this.props.setUser(response.data.user);
      // this.setState({
      //   user: response.data.user
      // })
    });
  }

  login() {
    const redirectUri = encodeURIComponent(
      window.location.origin + "/auth/callback"
    );
    window.location = `http://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/authorize?client_id=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  }

  render() {
    return (
      <div className="App">
      <div className="login">
        <div className="navlogin">
          <img className="user" src={this.props.user? this.props.user.picture: ""}/>
          <div className="user"> {this.props.user ? this.props.user.name : ""} </div>
        </div>
        <div className="auth0-button-container">
          <button onClick={this.login}>Login</button>
        </div>
       </div>
        <h1> ~Beautiful Quotes~ </h1>

        <Route path="/" component={List} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { setUser }
)(App);
