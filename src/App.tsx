import { Outlet } from 'react-router'
import './App.css'
import TopNavigation from './components/header/TopNavigation'

function App() {

  return (
       <>
    <div className=''>
        <TopNavigation />
    </div>

    <section>
        <Outlet />
    </section>
    </>
  )
}

export default App
