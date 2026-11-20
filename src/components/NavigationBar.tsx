import React from 'react'
import NavItem from './header/NavItem';
import { NavLink } from 'react-router';

export interface Path {
    label:string;
    path:string
}

interface PropType{
    paths:Path[];
    direction:"horizontal" | "vertical"
}

function NavigationBar({paths, direction}:PropType) {

    if(paths.length == 0){
        return "Tabs not found"
    }

  return (
    

    <ul className={`flex gap-2 p-2 ${direction == "horizontal" ? " flex-row" : " flex-col"}`}>
        {
            paths.map((path:Path) => (
                <NavItem key={path.path}>
                    <NavLink to={path.path} end={true}
                    style={({isActive}) => isActive ? {borderBottom:"2px solid blue"} : {borderBottom:"none"}}>{path.label}</NavLink>
                </NavItem>
            ))
        }
    </ul>
  )
}

export default NavigationBar