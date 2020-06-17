import AddProducts from "./scene/addProducts"
import Order from "./scene/order";
import ComingSoon from "./scene/comingSoon"
import BuyProducts from './scene/buyProducts';

const routes = [
    {
        path: '/home',
        titleComponents: { title: 'Home', component: [] },
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
        path: '/addProducts',
        titleComponents: { title: 'Edit products', component: ["uploadProduct"] },
        allowedRoles: ['admin', 'provider'],
        component: AddProducts
    },
];

export default routes
