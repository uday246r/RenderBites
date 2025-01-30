import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };

        console.log(this.props.name + "Child constructor");
    }
    componentDidMount(){
        console.log(this.props.name + "child componentDidMount")
    }
    render(){
        const { name, location } = this.props;
        const { count } = this.state;
        console.log(this.props.name + "child render");
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Count Increase</button>
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