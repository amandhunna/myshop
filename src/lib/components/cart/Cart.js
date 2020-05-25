import React from 'react';
import "./css.css";

export default function Cart(props) {
    const { cartOrders = 100, showCart = false, setShowCart } = props;
    return (
        <div>
            <span className={`font-size-30 center-middle p-relative
                       ${ showCart && "active-cart"} `}
                onClick={() => setShowCart(prev => !prev)}>
                 <i className="fa fa-shopping-cart p-relative">
                    <i className="cartOrders">{cartOrders}</i>
                </i>
            </span>
        </div>
    )
}
