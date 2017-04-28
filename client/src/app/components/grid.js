
import React, { Component } from 'react';



class Grid extends Component {

	render() {
		return (
			<div className="grid">
		<Grid>
	    <Row>
	    <Col xs={6} md={4}>
	      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
	        <h3>Thumbnail label</h3>
	        <p>Description</p>
	        <p>
	          <Button bsStyle="primary">Button</Button>&nbsp;
	          <Button bsStyle="default">Button</Button>
	        </p>
	      </Thumbnail>
	    </Col>
	    <Col xs={6} md={4}>
	      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
	        <h3>Thumbnail label</h3>
	        <p>Description</p>
	        <p>
	          <Button bsStyle="primary">Button</Button>&nbsp;
	          <Button bsStyle="default">Button</Button>
	        </p>
	      </Thumbnail>
	    </Col>
	    <Col xs={6} md={4}>
	      <Thumbnail src="/assets/thumbnaildiv.png" alt="242x200">
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

export default Grid;


