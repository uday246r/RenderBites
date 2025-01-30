import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// 1:32

class About extends Component {
    constructor(props){
        super(props);

        console.log("Parent constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did Mount")
    }
    render(){
        console.log("Parent render");
        return(
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                {/* <User name={"Uday (function)"}/> */}
                <UserClass name={"First"} location={"Ambala class"} />
                <UserClass name={"Second"} location={"USA"} />
            </div>
        );
    }
}


// const About = () =>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             {/* <User name={"Uday (function)"}/> */}

//             <UserClass name={"Uday (class)"} location={"Ambala class"} />
//         </div>
//     );
// };

export default About;
