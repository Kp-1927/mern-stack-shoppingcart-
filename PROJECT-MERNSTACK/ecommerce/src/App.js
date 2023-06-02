import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import{useState,useEffect} from 'react';
// import {Product} from './components/product/Product'
import ProductForm from './components/product-form/ProductForm';
import ProductList from './components/product-list/ProductList';
import {ProductState} from './store/ProductState'
import {Routes,Route,Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import NavigationBar from './components/navbar/NavigationBar'
import {Cart} from './components/cart/Cart';
import {CartState} from './store/CartState';
import {Login} from './components/admin/login/Login';
import {AuthState} from './store/AuthState';
import { ProtectRoute } from './components/admin/ProtectRoute';


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
function App() {
  // const navigate = useNavigate();
  return (
    <div classNameName="App">
      <ProductState>
        <CartState>
         <AuthState>
            <NavigationBar/>
            <Routes>
              <Route path ='/' element = {<ProductList/>}/>
              <Route path ='/cart' element = {<Cart/>}/>
              <Route path ='/admin/login' element = {<Login/>}/>
              <Route element = {<ProtectRoute/>}>
                <Route path ='/admin/product/add' element = {<ProductForm/>}/>
              </Route>
            </Routes>
          </AuthState>
        </CartState>
      </ProductState>
    </div>
  )
}

export default App;
