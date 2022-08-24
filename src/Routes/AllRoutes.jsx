import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/internships'/>
        <Route/>
        <Route/>
        <Route/>
    </Routes>
  )
}
