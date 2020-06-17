import React from 'react'
import { Link } from "react-router-dom";
import { GoogleLogout } from "../google";
import "./css.css";

export default function NavBar(props) {
    const { active, setActive } = props;
    const lg = active === "active"
    const providerLinks = ["home", "editProducts", "order", "profile"];
    const consumerLinks = ["home", "buyProducts", "cart", "profile"]
    const links = []

    return (
        <nav id="sideBar" className={`d-none d-flex flex-sm-column w-md-100 ${active}`} onClick={() => setActive("inactive")}>
            {links}
            <div className="secondary m-3"><GoogleLogout /><span className="ml-3" >
                {lg && "Logout"}
            </span></div>
        </nav>
    )
}

//#343a40 !important










// home, buyProducts, editProducts, cart, order, profile,


function nav(lg) {
    const link = {
        home: <Link className="secondary" to="/home">
            <i className="fa fa-home"></i>{lg && "Home"}</Link>,
        buyProducts: <Link className="secondary" to="/buyProducts" > <i className="fa fa-shopping-basket"></i>{lg && "Buy Products"}</Link>,

        editProducts: <Link className="secondary" to="/addProducts" >
            <i className="fas fa-edit"></i>
            {/* <i className="fa fa-upload"> </i>*/}
            {/* <i class="fa fa-product-hunt"></i> */}
            {/* <i class="fas fa-dolly-flatbed"></i> */}
            {lg && "Edit Products"}</Link>,


        cart: <Link className="secondary" to="/cart" >
            <i className="fa fa-shopping-cart p-relative"></i>
            {lg && "Cart"}
        </Link>,

        order: <Link className="secondary" to="/orders">
            {/* <i class="fa fa-cart-plus"></i> */}
            <i className="fa fa-truck"></i>{lg && "Orders"}</Link>,

        profile: <Link className="secondary" to="/profile" > <i className="fa fa-address-card"></i>{lg && "Profile"}</Link>



    }
}