import React from 'react';

class Greeting extends React.Component {
    render() {
        return <p>Welcome, {this.props.name}</p>;
    }
}

export default Greeting;