import AddProducts from "./scene/addProducts"
import Order from "./scene/order";
import Info from "./scene/info";
import Intro from "./scene/intro"
import BuyProducts from './scene/buyProducts';
import Page404 from "./scene/page404";
const routes = [
    {
        path: '/',
        title: 'Home',
        component: Intro

    },
    {
        path: '/info',
        title: 'User info',
        component: Info
    }, {
        path: '/buyProducts',
        title: 'Buy products',
        component: BuyProducts,
        header: ["cart"],
    },
    {
        path: '/orders',
        title: 'Orders',
        component: Order
    }, {
        path: '/addProducts',
        title: 'Upload/Review products',
        component: AddProducts
    },
    {
        path: '*' ,
        title: 'Page not found',
        component: Page404

    }
]

export default routes