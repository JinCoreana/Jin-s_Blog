import Footer from "./Footer"
import Header from "./Header"
import Navigation from "./Navigation"
import { Outlet } from "react-router-dom"
const Layout = ({search, setSearch}) => {
  return (
    <div className="App">
    <Header title="Jin's Blog"/>
    <Navigation search={search} setSearch={setSearch}/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout