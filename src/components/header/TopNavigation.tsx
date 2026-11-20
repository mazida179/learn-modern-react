import type { Path } from '../NavigationBar'
import NavigationBar from '../NavigationBar'

function TopNavigation() {
    const paths:Path[] = [
        {
            label:"Home",
            path:""
        },

        {
            label:"Forms",
            path:"/forms"
        }
    ]
  return (
    <div className='bg-indigo-400'>
        
        <NavigationBar paths={paths} direction={"horizontal"} />
    </div>
  )
}

export default TopNavigation