import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Aside from './Aside'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Article from './Article'

function Home() {
  return (
    <div>
        <Header/>
        <Navigation/>
        <div className='main'>
        <Article/>
        <Aside/>
        </div>
        <Footer/>
        <Outlet/>
    </div>
  )
}

export default Home