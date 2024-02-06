import React from 'react'
import { Outlet } from 'react-router-dom';
const DashBoard = () => {
  return (
    <div>
      
      <h2>DashBoard</h2>
      <Outlet/>
    </div>
  )
}

export default DashBoard