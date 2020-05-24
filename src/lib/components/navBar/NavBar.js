import React from 'react'
import { Link } from "react-router-dom";
import GoogleLogin from "../googleLogin";
import "./css.css";

export default function NavBar(props) {
    const { active, setActive } = props;
    return (
        <nav id="sideBar" className={`d-none d-md-flex ${active}`}>
            <span className="homeLink">
                <Link to="/"> Saada Bazar</Link>
                <i className="d-md-none" onClick={() => setActive("inactive")}><i class="fa fa-times"></i></i></span>
            <Link className="secondary" to="/orders">Orders</Link>
            <Link className="secondary" to="/info" >Info</Link>
            <Link className="secondary" to="/addProducts" >Add Products</Link>
            <Link className="secondary" to="/buyProducts" >Buy Products</Link>
            <div class="g-signIn d-md-none m-3"><GoogleLogin /></div>
        </nav>
    )
}

//#343a40 !important