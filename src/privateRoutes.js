import EditProducts from "./scene/editProducts";
import EditProduct from "./scene/editProduct";

import Order from "./scene/order";
import ComingSoon from "./scene/comingSoon"
import BuyProducts from './scene/buyProducts';
// import Profile from "./scene/profile"

const routes = [
    {
        path: '/home',
        titleComponents: { title: 'Home', component: [] },
        allowedRoles: ['admin', 'provider', 'consumer'],
        component: ComingSoon
    },
    {
        path: '/profile',
        titleComponents: { title: 'Profile', component: [] },
        allowedRoles: ['admin', 'provider', 'consumer'],
        component: ComingSoon
    },
    {
        path: '/buyProducts',
        titleComponents: { title: 'Buy products', component: ["cart"] },
        component: BuyProducts,
        header: ["cart"],
        allowedRoles: ['admin', 'consumer'],
        unScrollable: true,
    },
    {
        path: '/orders',
        titleComponents: { title: 'Orders', component: [] },
        allowedRoles: ['admin', 'provider'],
        component: Order
    }, {
        path: '/editProducts',
        titleComponents: { title: 'Edit products', component: ["uploadProduct"] },
        allowedRoles: ['admin', 'provider'],
        component: EditProducts
    },
    {
        path: '/editProducts/:productId',
        titleComponents: { title: 'Edit product', component: [] },
        allowedRoles: ['admin', 'provider'],
        component: EditProduct
    },
];

export default routes
