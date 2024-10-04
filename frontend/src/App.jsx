import { Layout } from "./Layout"
import { Home } from "./pages/Home"
import { Sginin } from "./pages/Signin"
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Sginup } from "./pages/Signup"
import { Cart } from "./pages/Cart"
import { Profile } from "./pages/Profile"
import { NotFound } from "./pages/NotFound"
import { Products } from "./pages/Products"
import {Categories} from './pages/Categories'
import { ProductDetails } from "./pages/ProductDetails"

import { Header } from "./components/Header"


const App = ()=> {
  

  return (
    <>
    <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} />
        <Route index element={<Home />} />
        <Route path="/signin" element={<Sginin />} />
        <Route path="/signup" element={<Sginup />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/products" element={<Products />} /> 
        <Route path="categories" element={<Categories />} /> 
        <Route path="/product-deails" element={<ProductDetails />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
