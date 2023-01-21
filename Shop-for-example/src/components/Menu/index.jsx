import React from 'react';
import { NavLink} from "react-router-dom";
import "./index.scss"
function Menu(props) {
    return (
        <div className="Menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/product">Our Product</NavLink>
        </div>
    );
}

export default Menu;