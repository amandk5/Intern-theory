import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/internships'/>
        <Route path='/login/student' element={<LoginPage/>}/>
        <Route/>
        <Route/>
    </Routes>
  )
}
