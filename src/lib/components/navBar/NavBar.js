import React from 'react'
import { Link } from "react-router-dom";
import { GoogleLogout } from "../google";
import "./css.css";

export default function NavBar(props) {
    const { active, setActive } = props;
    const lg = active === "active"
    return (
        <nav id="sideBar" className={`d-none d-flex flex-sm-column w-md-100 ${active}`} onClick={() => setActive("inactive")}>

            <Link className="secondary" to="/home">
                <i className="fa fa-home"></i>{lg && "Home"}</Link>
            <Link className="secondary" to="/buyProducts" > <i className="fa fa-shopping-basket"></i>{lg && "Buy Products"}</Link>

            <Link className="secondary" to="/addProducts" >
                <i className="fas fa-edit"></i>
                {/* <i className="fa fa-upload"> </i>*/}
                {/* <i class="fa fa-product-hunt"></i> */}                {/*     <i class="fas fa-dolly-flatbed"></i> */}
                {lg && "Edit Products"}</Link>


            <Link className="secondary" to="/cart" >
                <i className="fa fa-shopping-cart p-relative"></i>
                {lg && "Cart"}
            </Link>

            <Link className="secondary" to="/orders">
                {/* <i class="fa fa-cart-plus"></i> */}
                <i className="fa fa-truck"></i>{lg && "Orders"}</Link>
            <Link className="secondary" to="/info" > <i className="fa fa-address-card"></i>{lg && "Info"}</Link>


            <div className="secondary m-3"><GoogleLogout /><span className="ml-3" >
                {lg && "Logout"}
            </span></div>
        </nav>
    )
}

//#343a40 !important