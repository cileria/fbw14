import React, { Component } from 'react'


export default class Test extends Component {
    
    state = {
        derivedX: 0
    }

    constructor(props) {
        super(props);
        console.log(`
            calling constructor with
            props = ${JSON.stringify(props)}
        `);
    }
    
    static getDerivedStateFromProps(
        nextProps, // props, die gesendet werden an Test-component
        prevState // prevState, state nach dem letzten Render 
    ) {
        console.log(`
            calling getDerivedStateFromProps with
            nextProps = ${JSON.stringify(nextProps)}
            prevState = ${JSON.stringify(prevState)}
        `);

        return {
            derivedX: nextProps.x * 10
        };
    }

    shouldComponentUpdate(nextProps, prevState) {
        console.log(`
            calling shouldComponentUpdate()
        `)

        if(nextProps.x % 5 === 0) {
            console.log(`
                x ist teilbar durch 5, nicht updaten
            `)
            return false;
        }
        
        return true;
    }

    componentDidMount() {
        console.log(`
            calling componentDidMount()
        `)
    }

    componentDidUpdate() {
        console.log(`
            calling componentDidUpdate()
        `);
    }

    componentWillUnmount() {
        console.log(`
            calling componentWillUnmount()
        `)        
    }

    render() {
        console.log(`
            calling render()
        `)        
        
        return (
            <div>
                <h2>Test Component</h2>
                <div>
                    x = {this.props.x}
                    derivedX = {this.state.derivedX}
                </div>
            </div>
        )
    }
}
