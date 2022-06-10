import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"
 
import { Outlet } from "react-router-dom"

const Layout = ({h}) => {

  return (
    <div className="App">
    <Header title="Jin's Blog"/>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout