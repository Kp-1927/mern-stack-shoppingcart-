import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navigationbar.css';
import React,{useState,useContext, useEffect} from 'react';
import CartContext from '../../store/CartContext';
import {Link,useNavigate} from 'react-router-dom';
import AuthContext from '../../store/AuthContext';

function NavigationBar() {
  const AuthCtx = useContext(AuthContext);
  const CartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const [noofItems,setNoOfItems]= useState(0);
  useEffect(()=>{
    setNoOfItems(CartCtx.cartItems.length)
  },[CartCtx.cartItems])
  const onLogoutHandler=()=>{
    AuthContext.setIsLoggedIn(false);
    navigate('/admin/login');
  }
    return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src ="https://cdn.vectorstock.com/i/preview-2x/26/91/online-shop-logo-template-icon-vector-30562691.webp" alt ="" className='BrandLogo'/> JUMBO.COM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/">Products</Nav.Link> */}
            <Nav.Link>
              <Link className='navitem1' to="/">Products</Link>
            </Nav.Link>
            {/* <Nav.Link href="/product/add">Add Product</Nav.Link> */}
            <Nav.Link>
              <Link className='navitem1' to="admin/product/add">Add Products</Link>
            </Nav.Link>
            <NavDropdown title="More Options" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Contact Us</NavDropdown.Item>
              <NavDropdown.Item href="#">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className='navitem2' to="/admin/login">Login</Link>
            <Link className='navitem2' onClick={onLogoutHandler}to="/admin/login">LogOut</Link>
            {/* {!AuthCtx.isLoggedIn? <Link className='navitem2' to="/admin/login">Login</Link>:
              <Link className='navitem2' onClick={onLogoutHandler} to="/admin/login">LogOut</Link>} */}
            <Link className='navitem1' to="/cart"><img src="https://cdn.dribbble.com/users/3267379/screenshots/6098927/e_shop.jpg" className='CartLogo'/> {noofItems}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;