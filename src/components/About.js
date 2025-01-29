import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
            <User name={"Uday (function)"}/>

            <UserClass name={"Uday (class)"} location={"Ambala class"} />
        </div>
    );
};

export default About;
