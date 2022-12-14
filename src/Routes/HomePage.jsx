import React from 'react'
import MainContainer from '../Components/Container/MainContainer'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'

export default function HomePage({pageType}) {
  return (
    <div>
        <Navbar/>
        <MainContainer page_type={pageType}/>
        {/* <Footer/> */}
    </div>
  )
}
