import React, { PropTypes as T } from "react";
import Search from "react-icons/lib/fa/search";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import NotificationsIcon from "material-ui/svg-icons/social/notifications";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { isTokenExpired } from "../utils/jwtHelper"; 
import {connect} from "react-redux";
import Helmet from "react-helmet";
import { Link } from 'react-router';

//style;
import style from "../style/navbar.scss";
var Background = "./client/src/app/components/slider1.png";

const mapStateToProps = (state) => {
  return {profile: state.profile};
};
export class Wrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          open: false,
          links: ["Home", "Portfolio", "Login"],
          width:  1367,
          searching: false,
          image: Background,
      };

    }
    tripleBreak() {
      return (
        <div><br/><br/><br/></div>
        );
    }
    updateDimensions() {
    if(window.innerWidth < 500) {
      this.setState({ width: 450});
    } else {
      let updateWidth  = window.innerWidth-100;
      this.setState({ width: updateWidth});
    }
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  listify(obj, className) {
    return obj.map((link)=>(<li key={link} className={className}><Link to={link.toLowerCase()}>{link}</Link></li>));
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
   header() {
      if (this.props.routes[1].path) {
      return this.capitalizeFirstLetter(this.props.routes[1].path.replace('/',''));
    }
    else {
      return "vdiaz.tech | full stack developer";
    }
  }
  search() {
      this.setState({searching: false});
  }
  searchIcon() {
    return;
  }
  menuButton() {
    return (
      <div>
      <Helmet
          htmlAttributes={{lang: "en", amp: undefined}} // amp takes no value
          title={this.header()}
      />
      <ul style={{float: "left"}}>
      {this.listify(this.state.links, "listLink")}
      </ul> {this.searchIcon()}
      {this.state.searching && <input  type="search" 
      placeholder="Search Here" style={{backgroundColor: '#E6E6E6', 
      position: 'absolute', top: '65', right: '0', padding: '12px', 
      border: '0px',  width: '250px'}} />}
      {this.upperRightCorner()}</div>
      );
  }
  handleToggle = () => {this.setState({open: !this.state.open});}
  isLoggedIn() {
    const token = localStorage.getItem("id_token");
    const conditional = !!token && !isTokenExpired(token);
    return conditional;
  }
  upperRightCorner() {   
    if (this.isLoggedIn() && this.props.profile.profile.picture) {
      let index = this.state.links.indexOf("login");
      if (true) {
         this.state.links.splice(index,1);
        this.state.links.push("Logout");
      }
      return (<img alt="user_pic" className={"profilePic"} 
      src={this.props.profile.profile.picture} />);
    }
    else {
      let index = this.state.links.indexOf("login");
       this.state.links.splice(index,1);
        this.state.links.push("Logout");
      return;
    }
  }
    render() {
        let children = null;
        if(this.props.children) {
            children = React.cloneElement(this.props.children, {
                auth: this.props.route.auth 
            });
        }
        return(
            <div style={{margin: '0px'}}>
      <MuiThemeProvider>
      <AppBar 
      title="vdiaz.tech" 
      showMenuIconButton={this.state.width < 950}
      titleStyle={this.state.width < 1000 ? styles.titleStyle : styles.phoneStyle} 
      style={styles.navBar}
      iconElementRight={this.state.width  >= 950 ? this.menuButton() : null}
      onLeftIconButtonTouchTap={this.handleToggle}
      />
      </MuiThemeProvider>
      <MuiThemeProvider>
      <Drawer 
      containerStyle={{backgroundColor: "#0080FF"}} 
      open={this.state.open && this.state.width < 1000}>
      <h1 style={{textAlign: 'center', color: '#333333'}}> Menu </h1>
      <h1 className="icon icon-white thin close"
          onClick={this.handleToggle} > X </h1>{this.tripleBreak()}
      {this.listify(this.state.links,  "menuItem")}                  
        </Drawer>

        </MuiThemeProvider>
        <div style={{backgroundImage: `url(${this.state.image})`, backgroundSize:"cover"}}>
        {children}
        </div>
      </div>);
    }
}
const styles = {
  navBar: {
    backgroundColor: "#1A237E",
    position: "fixed",
    top: "0",
    right: "0",
    left: "0",
  },
  nothingUnderNavBar: {
    marginTop: "64px",
    padding: "0px"
  },
  titleStyle: {
    fontSize: "40px",
    textAlign: "center"
  },
  phoneStyle: {
    fontSize: "30px",
  }
};
export default connect(mapStateToProps)(Wrapper);