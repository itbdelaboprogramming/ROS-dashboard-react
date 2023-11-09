'use client'

import { Provider } from "react-redux";
import { store } from "./store";
 // Make sure this import path is correct

function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>;
}

export default Providers;
