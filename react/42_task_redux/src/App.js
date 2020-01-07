import React, { Component } from 'react';
import './App.css';
import A from './A';
import C from './C';
import { connect } from 'react-redux';

class App extends Component {
  
  componentDidUpdate(nextProps, prevState) {
    if(nextProps.b === 10 || nextProps.c === 11) {
      this.props.reset();
    }
  }
  
  render() {
    return (
      <div>
        a = {this.props.a}, b = {this.props.b}, c = {this.props.c}
        <A />
        <C />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  a: state.reducer1.a,
  b: state.reducer2.b,
  c: state.reducer2.c
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch({ type: 'RESET' })
})

export default connect(mapStateToProps, mapDispatchToProps)(App);