import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { GoogleLogout } from "../google";
import CurrentUserContext from "../context/currentUser";
import helper from "../../helper/base";
import "./css.css";

export default function NavBar(props) {
    const { active, setActive } = props;
    const currentUser = useContext(CurrentUserContext) || {};
    console.log(currentUser)
    const lg = active === "active"
    const adminLinks = ["home", "buyProducts", "products", "orders", "cart", "profile"]
    const consumerLinks = ["home", "buyProducts", "cart", "profile"]
    const providerLinks = ["home", "products", "orders", "profile"];
    const { isProvider, isAdmin } = currentUser;



    const getLinks = () => {
        let forUser = isProvider ? providerLinks : consumerLinks
        if (isAdmin) forUser = adminLinks;
        const links = forUser.map(link => nav(link, lg));
        return links;
    }

    if(helper.isTokenExpired(currentUser.exp)) {
        return <></>;
    }

    return (
        <nav id="sideBar" className={`d-none d-flex flex-sm-column w-md-100 ${active}`} onClick={() => setActive("inactive")}>
            {getLinks()}
            <div className="secondary m-3"><GoogleLogout /><span className="ml-3" >
                {lg && "Logout"}
            </span></div>
        </nav>
    )
}

//#343a40 !important

function nav(link, lg = true) {
    const linkItems = {
        home: <Link className="secondary" to="/home">
            <i className="fa fa-home"></i>{lg && "Home"}</Link>,
        buyProducts: <Link className="secondary" to="/buyProducts" > <i className="fa fa-shopping-basket"></i>{lg && "Buy Products"}</Link>,

        products: <Link className="secondary" to="/products" >
            <i className="fas fa-edit"></i>
            {/* <i className="fa fa-upload"> </i>*/}
            {/* <i class="fa fa-product-hunt"></i> */}
            {/* <i class="fas fa-dolly-flatbed"></i> */}
            {lg && "Edit Products"}</Link>,


        cart: <Link className="secondary" to="/cart" >
            <i className="fa fa-shopping-cart p-relative"></i>
            {lg && "Cart"}
        </Link>,

        orders: <Link className="secondary" to="/orders">
            {/* <i class="fa fa-cart-plus"></i> */}
            <i className="fa fa-truck"></i>{lg && "Orders"}</Link>,

        profile: <Link className="secondary" to="/profile" > <i className="fa fa-address-card"></i>{lg && "Profile"}</Link>
    }

    return linkItems[link];
}