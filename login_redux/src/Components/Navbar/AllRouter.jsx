import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Counter from '../Pages/Counter'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

function AllRouter() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/counter' element={<Counter />}></Route>
            <Route path='/login' element={<Login />}></Route>
      </Routes>
    </div>
  )
}

export default AllRouter