import React from "react"
import { UserClass } from "./UserClass"


export class About extends React.Component {

    render() {
        return(
            <div>
             <h1> About page</h1>
             {/* TWO INSTANCES OOF THE SAME CLASS */}
             <UserClass name1={'class based component'} />
             </div>
        );
    }
}

