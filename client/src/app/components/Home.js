import React, { Component } from 'react';
import {
    connect,
} from "react-redux";
import ReactDOM from 'react-dom';
import Header from './header';
import Portfolio from './portfolioitems';
import { Jumbotron, Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import "../style/styles.scss";


const mapStateToProps = (state) => ({
    profile: state.profile,
});
class Home extends React.Component {

    render() {
        return(
            <div className={"container"}>               
			     <Jumbotron>
				    <h1>Hello, world!</h1>
				    <p>component for calling extra attention to featured content or information.</p>
				    <p><Button bsStyle="primary">Learn more</Button></p>
			  	</Jumbotron>
				<Portfolio />
            </div>);
    }
}
export default connect(mapStateToProps)(Home);
