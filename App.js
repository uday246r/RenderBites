import React from "react";
import ReactDOM from "react-dom/client";

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
const jsxHeading =( <h1 id ="heading">
    Namaste React Using JSX
    </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

