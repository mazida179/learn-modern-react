import type { RouteObject } from "react-router";
import LoginForm from "./LoginForm";
import ToDoForm from "./ToDoForm";
import FormLayout from "./FormLayout";


const formRoutes:RouteObject[] = [
    {
        path:"/forms",
        Component:FormLayout,
        children:[
            {
                index:true,
                Component:LoginForm,
            },

            {
                path:"to-do-form",
                Component:ToDoForm
            }
        ]
    }
]

export default formRoutes