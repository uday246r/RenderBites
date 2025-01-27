import {LOGO_URL} from "../utils/constants";
import {useState} from "react";

const Header = () => {

    // let btnName = "Login";
    const [btnNameReact, setBtnNameReact] = useState("Login");

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button
                      className="login" 
                      onClick={()=>{
                        btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                      }}
                      >
                        {btnNameReact}
                      </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;


// we can do default and named export and import simultaneously for same component.