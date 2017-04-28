import React, { PropTypes as T } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import darkBaseTheme from "material-ui/styles/baseThemes/darkBaseTheme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import AuthService from "../utils/AuthService";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedOut: this.props.routes[1].path === "/logout",
    };
  }
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService),
  }
  componentWillMount() {
    if (this.state.loggedOut) {
        this.props.auth.logout();
    }
  }
  createMessage() {
    if (!this.state.loggedOut) {
      return "Try Out The Login System";
    }
    else {
      return "You Have Been Logged Out";
    }
  }
  header() {
    if (!this.state.loggedOut) {
      return "Login";
    }
    else {
      return "Log Out";
    }
  }
  render() {
    const { auth } = this.props;
    return (
      <div style={styles.location}>

      <h1 style={{textAlign: 'center',color: 'white'}}> {this.createMessage()} </h1>
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <RaisedButton label="Login" labelStyle={styles.text, {color: 'white'}} 
          primary={true} style={styles.button} onClick={auth.login.bind(this)}/>
      </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  button: {
      margin: '0 auto',
      display: 'block',
      width: '100px',
  },
  location: {
    backgroundColor: '#666666',
    margin: '0 auto',
    width: '225px',
    marginTop: "120px",
    padding: '40px'
  }

};