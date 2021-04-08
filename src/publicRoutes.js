import Login from "./scene/login"
import SignUp from "./scene/signUp";
const routes = [
    {
        path: '/login',
        titleComponents: { title: 'Login', component: [] },
        component: Login
    },
    {
        path: '/signup',
        titleComponents: { title: 'Sign up', component: [] },
        component: SignUp
    },
]

export default routes