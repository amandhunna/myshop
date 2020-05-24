import AddProducts from "./scene/addProducts"
import Order from "./scene/order";
import Info from "./scene/info";
import Intro from "./scene/intro"
import BuyProducts from './scene/buyProducts';

const routes = [
    {
        path: '/',
        component: Intro
    },
    {
        path: '/info',
        component: Info
    }, {
        path: '/buyProducts',
        component: BuyProducts
    },
    {
        path: '/orders',
        component: Order
    }, {
        path: '/addProducts',
        component: AddProducts
    },
]

export default routes