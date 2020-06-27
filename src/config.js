const root = 'http://localhost:3001'
const config = {
    googleClientId: "1021639348087-97llph7pa6aa3v4ffta2jl2ammg307u1.apps.googleusercontent.com",
    url: {
        googleLogin: `${root}/googleLogin`,
        login: `${root}/login`,
        signUp: `${root}/signUp`,
        
        user: `${root}/user`,
        product: `${root}/product`,
        store: `${root}/store`,
        order: `${root}/order`,
    }
}

export default config;
