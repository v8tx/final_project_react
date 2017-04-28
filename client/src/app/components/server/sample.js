var isNode = typeof module !== 'undefined' && module.exports;
var React = isNode ? require('react') : window.React;
var ReactDOM = isNode ? require('react-dom') : window.ReactDOM;

export default class HelloMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const name = this.state.name ? this.state.name : this.props.name
        return(
            <div>Hello {name}</div>
        )
    }
}

exports.HelloMessage = HelloMessage
