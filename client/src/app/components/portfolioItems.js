
import React, { Component } from 'react';
import { Button, Grid, Row, Col, Thumbnail } from 'react-bootstrap';


class Portfolio extends Component {

	render() {
		return (
			<div className="grid">
		<Grid>
	    <Row>
	    <Col xs={6} md={4}>
	      <Thumbnail src="./client/src/app/img/fpo.png" alt="242x200">
	        <h3>Thumbnail label</h3>
	        <p>Description</p>
	        <p>
	          <Button bsStyle="primary">Button</Button>&nbsp;
	          <Button bsStyle="default">Button</Button>
	        </p>
	      </Thumbnail>
	    </Col>
	    <Col xs={6} md={4}>
	      <Thumbnail src="./client/src/app/img/fpo.png" alt="242x200">
	        <h3>Thumbnail label</h3>
	        <p>Description</p>
	        <p>
	          <Button bsStyle="primary">Button</Button>&nbsp;
	          <Button bsStyle="default">Button</Button>
	        </p>
	      </Thumbnail>
	    </Col>
	    <Col xs={6} md={4}>
	      <Thumbnail src="./client/src/app/img/fpo.png" alt="242x200">
	        <h3>Thumbnail label</h3>
	        <p>Description</p>
	        <p>
	          <Button bsStyle="primary">Button</Button>&nbsp;
	          <Button bsStyle="default">Button</Button>
	        </p>
	      </Thumbnail>
	    </Col>
	    </Row>
  </Grid>

			</div>
		);
	}
}

export default Portfolio;


