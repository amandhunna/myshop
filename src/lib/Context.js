import { createContext } from "react";
//import proxyLogger from "./helper/logger";

export const Context = createContext({});

export const ContextProvider = Context.Provider;
export const ContextConsumer = Context.Consumer;
/* const ContextProvider = (props) => {
    const [logger] = useState(proxyLogger);
    return (
        <Context.Provider value={{ ...logger }}>
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvider; */
