import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };
    }
    render(){
        const { name, location } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <h1>Count: {count2}</h1>
                <h2>Name: {name}</h2>
                <h3>Locaion: {location}</h3>
                <h4>Contact: @uday246r</h4>
            </div>
        );
    }
}

export default UserClass;

// Functional Component is function which return some piece of jsx.
// Class Component is a class which extend React.Component and has render() method which return some piece of jsx