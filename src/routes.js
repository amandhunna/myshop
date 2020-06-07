import AddProducts from "./scene/addProducts"
import Order from "./scene/order";
import Info from "./scene/info";
import Login from "./scene/login"
import BuyProducts from './scene/buyProducts';
import Page404 from "./scene/page404";
import SignUp from "./scene/signUp";
const routes = [
    {
        path: '/home',
        titleComponents: { title: 'Home', component: [] },
        component: Login
    },
    {
        path: '/signup',
        titleComponents: { title: 'Home', component: [] },
        component: SignUp
    },
    {
        path: '/info',
        titleComponents: { title: 'User info', component: [] },
        component: Info
    }, {
        path: '/buyProducts',
        titleComponents: { title: 'Buy products', component: ["cart"] },
        component: BuyProducts,
        header: ["cart"],
        unScrollable: true,
    },
    {
        path: '/orders',
        titleComponents: { title: 'Orders', component: [] },
        component: Order
    }, {
        path: '/addProducts',
        titleComponents: { title: 'Edit products', component: ["uploadProduct"] },
        component: AddProducts
    },
    {
        path: '*',
        titleComponents: { title: 'Page not found', component: [] },
        component: Page404

    }
]

export default routes