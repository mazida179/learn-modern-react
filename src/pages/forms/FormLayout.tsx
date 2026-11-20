import React from 'react'
import { Outlet } from 'react-router'
import NavigationBar, { type Path } from '../../components/NavigationBar'

function FormLayout() {

    const paths: Path[] = [
        {
            label: "Login Form",
            path: ""
        },

        {
            label: "To Do Form",
            path: "to-do-form"
        }
    ]
    return (

        <>
        <div className='bg-fuchsia-200'>

            <NavigationBar paths={paths} direction={"horizontal"} />
        </div>

            <Outlet />
        </>

    )
}

export default FormLayout