var React = require('react');

export default class Item extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: this.props.initialCount
      };
    }
    _increment() {
        this.setSTate({count: this.state.count + 1});
    }
    render() {
        return (
         <div onClick={this._increment}>
            {this.state.count}
        </div>
        );
    }
}