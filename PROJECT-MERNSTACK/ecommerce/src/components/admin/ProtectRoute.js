import React,{useContext} from 'react'
import AuthContext from '../../store/AuthContext'
import {Outlet} from 'react-router-dom';
import {Login} from './login/Login'
export const ProtectRoute = () => {
    const Authctx = useContext(AuthContext);
    return (
        Authctx.isLoggedIn?<Outlet/>:<Login/>
  )
}
