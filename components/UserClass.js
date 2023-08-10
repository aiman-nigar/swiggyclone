import React from "react";

//creating the instance of this class
export class UserClass extends React.Component {

    constructor(props){
    super(props);

    // STATE:
    this.state = {
        count: 0,
        count2: 0,
    };

    console.log(props);
    console.log('constructor cld');

    }

    render() {

        console.log('render called');

        const {name} = this.props; 
        return(
            <div className="usercard">
                <h1> {name} </h1>
                <h1> count:  {this.state.count} </h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                                           
                }}>
                    Increase
                </button>
            
            </div>
        )
    }
}