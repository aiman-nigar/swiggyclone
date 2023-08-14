import React from "react";
import '../style.css';

//creating the instance of this class
export class UserClass extends React.Component {

    constructor(props){
    super(props);

    // STATE:
    this.state = {
        apiinfo : {
            name: "dummynname",
            bio : "dummy bio",
            img : "dummy image",

        },
    };

    console.log(props);
    console.log('1. child constructor cld');

    }

    //MAKE THIS FUNC as ASYNC FUNCTION 
    async componentDidMount() {

        console.log('3. component did mount');
        const fetchapi = await fetch('https://api.github.com/users/aiman-nigar');
        const jsonapi = await fetchapi.json();   //converted to json

        console.log(jsonapi);

        //now this is updating our state using setstate, now again dom is updated and so render will call again
        this.setState({
            apiinfo : jsonapi,
        });
        // debugger;

        this.timer = setInterval(() => {
            console.log('React session');
        }, 1000);
    }

    componentDidUpdate() {
        console.log('5. component did update cd');
    }

    //power of unmounting
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log('component unmounted');
    }
   

    render() {

        console.log('2. child render is called');

        const {name, bio, avatar_url} = this.state.apiinfo;

        return(
            <div className="usercard">
            <img src={avatar_url} ></img>
                <h1> {name} </h1>
                <h3> {bio } </h3>
                <p> {this.props.name1} </p>

                {/* <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                                           
                }}>
                    Increase
                </button> */}
            
            </div>
        )
    }
}