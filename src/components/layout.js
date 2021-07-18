import React , {useState} from "react"
import Header from "./Header"
import Footer from './Footer'
import { GlobalStyle } from "./styles/GlobalStyles"
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpen,setIsOpen] = useState(false)

  const toogle = () => {
      setIsOpen(!isOpen)
  }


  return (
    <>
    <GlobalStyle/>
    <Sidebar isOpen={isOpen} toogle={toogle}/>
      <Header toogle={toogle}/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

export default Layout
