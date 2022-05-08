import React, { useEffect } from 'react'
import '../styles/currency.scss'
import {NavLink, Outlet, useLocation, useNavigate,} from 'react-router-dom'
export const CurrencyExchange = () => {
    const navigate= useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/') {
          navigate('/converter')
        }
    }, [])

  return (
    <main className='container currency__container'>
        <h1 className='currency__title'>Currency</h1>
        <nav className='currency__nav'>
            <NavLink to='/converter' className={({ isActive }) =>
                  isActive ? "currency__nav-link currency__nav-link_active" : "currency__nav-link"
                }>Converter</NavLink>
            <NavLink to='/rates' className={({ isActive }) =>
                  isActive ? "currency__nav-link currency__nav-link_active" : "currency__nav-link"
                }>Exchange Rates</NavLink>
        </nav>
        <section className='currency__page'>
            <Outlet/>
        </section>
    </main>
  )
}
