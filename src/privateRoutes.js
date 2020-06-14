import AddProducts from "./scene/addProducts"
import Order from "./scene/order";
import Login from "./scene/login"
import BuyProducts from './scene/buyProducts';
import Page404 from "./scene/page404";
import SignUp from "./scene/signUp";
const routes = [
    {
        path: '/home',
        titleComponents: { title: 'Home', component: [] },
        allowedRoles: ['admin', 'provider', 'consumer'],
        component: Login
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
        path: '/addProducts',
        titleComponents: { title: 'Edit products', component: ["uploadProduct"] },
        allowedRoles: ['admin', 'provider'],
        component: AddProducts
    },
   /*  {
        path: '*',
        titleComponents: { title: 'Page not found', component: [] },
        component: Page404

    }, */
];

export default routes
