import React from 'react'
import { Link } from "react-router-dom";
import GoogleLogin from "../googleLogin";
import "./css.css";

export default function NavBar(props) {
    const { active, setActive } = props;
    const lg = active === "active"
    return (
        <nav id="sideBar" className={`d-none d-flex flex-sm-column w-md-100 ${active}`} onClick={() => setActive("inactive")}>

            <Link className="secondary" to="/">
                <i class="fa fa-home"></i>{lg && "Home"}</Link>
            <Link className="secondary" to="/buyProducts" > <i class="fa fa-shopping-basket"></i>{lg && "Buy Products"}</Link>

            <Link className="secondary" to="/addProducts" >
                <i class="fa fa-upload">{/* <i class="fa fa-product-hunt"></i> */}</i>
                {/*     <i class="fas fa-dolly-flatbed"></i> */}
                {lg && "Add Products"}</Link>

            <Link className="secondary" to="/orders">
                {/* <i class="fa fa-cart-plus"></i> */}
                <i class="fa fa-truck"></i>{lg && "Orders"}</Link>
            <Link className="secondary" to="/info" > <i class="fa fa-address-card"></i>{lg && "Info"}</Link>


            <div class="g-signIn m-3 d-none"><GoogleLogin /></div>
        </nav>
    )
}

//#343a40 !important