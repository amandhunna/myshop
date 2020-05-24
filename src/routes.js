import AddProducts from "./scene/addProducts"
import Order from "./scene/order";
import Info from "./scene/info";
import Intro from "./scene/intro"
import BuyProducts from './scene/buyProducts';

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
]

export default routes