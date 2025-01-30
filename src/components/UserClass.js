import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            // count: 0,
            userInfo:{
                name: "Dummy",
                location: "default",
                avatar_url: "dummy_photo"
            },
        };

        console.log(this.props.name + "Child constructor");
    }
    async componentDidMount(){
        // console.log(this.props.name + "child componentDidMount")
        const data = await fetch("https://api.github.com/users/uday246r");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component Did Updatee");
    }

    componentWillUnmount(){
        console.log("Component will Unmount");

    }

    render(){
        const { name, location, avatar_url } = this.state.userInfo;
        // const { count } = this.state;
        // console.log(this.props.name + "child render");
        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1> */}
                {/* <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Count Increase</button> */}
                <img src={avatar_url} />
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