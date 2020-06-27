import Order from "./scene/order";
import ComingSoon from "./scene/comingSoon"
import { BuyProducts, Products, ProductDetail } from './scene/product';


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
        path: '/orders',
        titleComponents: { title: 'Orders', component: [] },
        allowedRoles: ['admin', 'provider'],
        component: Order
    },
    // products
    {
        path: '/buyProducts',
        titleComponents: { title: 'Buy products', component: ["cart"] },
        component: BuyProducts,
        header: ["cart"],
        allowedRoles: ['admin', 'consumer'],
        unScrollable: true,
    }, {
        path: '/products',
        titleComponents: { title: 'Products', component: ["uploadProduct"] },
        allowedRoles: ['admin', 'provider'],
        component: Products
    },
    {
        path: '/products/:productId',
        titleComponents: { title: 'Edit product', component: [] },
        allowedRoles: ['admin', 'provider'],
        component: ProductDetail
    },
];

export default routes
