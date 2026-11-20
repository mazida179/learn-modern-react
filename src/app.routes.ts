import { createBrowserRouter } from "react-router";
import formRoutes from "./pages/forms/form.routes";
import App from "./App";
import Home from "./pages/Home";

const approutes = createBrowserRouter([
    {
        path:"",
        Component:App,
        children:[
            {
                index:true,
                Component:Home,
            },

            ...formRoutes
        ]
    },

])

export default approutes