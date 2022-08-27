import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/internships' element={<HomePage pageType="internships"/>}/>
        <Route path='/login/student' element={<LoginPage loginType="student"/>}/>
        <Route path='/login/company' element={<LoginPage loginType="company"/>}/>
        <Route path='/register/student' element={<RegisterPage/>}/>
        <Route/>
    </Routes>
  )
}
