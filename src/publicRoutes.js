import Login from "./scene/login"
import Page404 from "./scene/page404";
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
  /*   {
        path: '*',
        titleComponents: { title: 'Page not found', component: [] },
        component: Page404

    } */
]

export default routes