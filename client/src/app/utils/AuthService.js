import React, { Component } from 'react';
import { EventEmitter } from "events";
import { isTokenExpired } from "./jwtHelper";
import Auth0Lock from "auth0-lock";
import {connect} from "react-redux";
import {addData} from "../actions/profile";
import { browserHistory } from "react-router";
import store from "../store";


class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super();
    // Configure Auth0
    const options = {
      theme: {
    logo: "http://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
    primaryColor: "#37474f"
      },
    };
    this.lock = new Auth0Lock(clientId, domain, options, {
      auth: {
        redirectUrl: `${window.location.origin}/home`,
        responseType: "token"
      }
    });
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", this._doAuthentication.bind(this));
    // Add callback for lock `authorization_error` event
    this.lock.on("authorization_error", this._authorizationError.bind(this));
    // binds login functions to keep this context
    this.login = this.login.bind(this);
  }
  _doAuthentication(authResult){
    // Saves the user token
    this.setToken(authResult.idToken);
    // navigate to the home route
    browserHistory.replace("/home");

    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
          throw(err);
      } else {
        this.setProfile(profile);
        store.dispatch(addData(profile));
      }
    });
  }

  _authorizationError(error){
    // Unexpected authentication error
  }

  login() {
    // Call the show method to display the widget.
    this.lock.show();
  }

  loggedIn(){
    // Checks if there is a saved token and it"s still valid
    const token = this.getToken();
    return !!token && !isTokenExpired(token);
  }

  setProfile(profile){
    // Saves profile data to localStorage
    localStorage.setItem("profile", JSON.stringify(profile));
    // Triggers profile_updated event to update the UI
    this.emit("profile_updated", profile);
  }

  getProfile(){
    // Retrieves the profile data from localStorage
    const profile = localStorage.getItem("profile");
    store.dispatch(addData(profile));
    return profile ? JSON.parse(localStorage.profile) : {};
  }

  setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  }

  getToken(){
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  logout(){
    // Clear user token and profile data from localStorage
    localStorage.removeItem("id_token");
    localStorage.removeItem("profile");
  }
}
export default AuthService;
