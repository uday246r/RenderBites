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

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://th.bing.com/th?q=Logo+Ideas+for+a+Food+App&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
            <img className="res-logo"
            alt="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/xqwpuhgnsaf18te7zvtv" />
            <h3>Meghana Foods</h3>
            <h4>Chole Samosa, North India, Asian</h4>
            <h4>4.3 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />

            </div>
        </div>
    );
};

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