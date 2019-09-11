import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


class FruitComponentsHeadline extends React.Component {
    render() {

        return (
            <React.Fragment>
            <h1>Components 1</h1>

            </React.Fragment>
        );
    }
}

ReactDOM.render(<FruitComponentsHeadline />, document.getElementById(`root`));


export default FruitComponentsHeadline;