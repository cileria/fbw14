import React from 'react';

class Fruit extends React.Component {
     
    constructor(props){
        super(props);
        this.state={
            color:'uncolored',
            render: true
        };

    }  

	randomColor(event){
	    var letters = '0123456789ABCDEF';
	    var colory = '#';
	    for (var i = 0; i < 6; i++ ) {
		  colory += letters[Math.floor(Math.random() * 16)];
        }
        
 
        //this.color = colory;
        console.log('colory = ' + colory);
        this.setState({color: colory});
    }


    deleteMe(event) {
        console.log(event.target);
        console.log(this);
        this.setState({render : false});
        console.log(this.state.render);
    }  
    render() {
        console.log(this.state.render);
        if (this.state.render===true){
            return(
                <React.Fragment>
                    <p style={{background: this.state.color}}>
                        {this.props.name} {this.state.color}  
                        <button  onClick={ this.randomColor.bind(this)}>
                            Change Color
                        </button>   
                        <button onClick = {this.deleteMe.bind(this)}>
                                Delete Me
                        </button>
                    </p>
        
                </React.Fragment>)
        }/* else return null; */
        return null;
    };
}

export default Fruit;