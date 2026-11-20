import styled from "styled-components";
import React, { type ReactNode } from 'react'

type propType = {
    children:ReactNode,

}

const ListItem = styled.li`
background:none;
list-style:none;
border:1px solid #1d1a1c;
padding:.3em;

`


function NavItem({children}:propType) {
  return (
    <ListItem>
        {children}
    </ListItem>
  )
}

export default NavItem