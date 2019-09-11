import React from 'react';
import PropTypes from 'prop-types';
//import ReactDOM from 'react-dom';

class MyHeading extends React.Component {
    render() {
        const titles = ['A header will be rendered!!!!!', 'second Title', 'third Title'];
        const showParagraph = true;
        return (/**statt DIV */
            <React.Fragment>
                <h1>
                {titles[0]}</h1>
                {/* Kommentar im React */}
                {titles.map((title, index) => <h1 key={index}> {title} </h1>)}
                {/* Conditional im React */}
                {showParagraph && <p>{this.props.paragraphText}</p>}
                {/* Children im Property */}
                {this.props.children}
            </React.Fragment>
        );/**statt DIV */
    }
}

MyHeading.propTypes = {
    paragraphText: PropTypes.string.isRequired
};
//ReactDOM.render(<MyHeading paragraphText="A paragraph will be added"/>, document.getElementById('heading'));

export default MyHeading;