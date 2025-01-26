import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


//React.createElement => object => HTML Element(when render)

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id : "child" }, [
//         React.createElement("h1", {}, "This is Namaste React"),
//         React.createElement("h2", {}, "I'm an h2 tag"),
//     ]),
//     React.createElement("div", { id : "child2" }, [
//         React.createElement("h1", {}, "I'm an h1 tag"),
//         React.createElement("h2", {}, "I'm an h2 tag"),
//     ]),
// ]);

// console.log(parent);


// JSX
// const jsxHeading = ( 
//  <h1 id ="heading">
//     Namaste React Using JSX
//     </h1>
// );

//React Functional Component
//Use capital first letter for functional component

// const Title = () =>(
//     <h1 className="head" tabIndex="5">
//         Namaste React using Title FC.
//     </h1>
// )
// const HeadingComponent = () => (
//     <div id="container">
    
//     <Title/>
//      {/* {jsxHeading} */}

//      <h1 className="heading">Namaste React Functional Component</h1>
//     </div>
// );



const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<AppLayout/>)


