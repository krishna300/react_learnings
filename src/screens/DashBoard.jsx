import React, {useState} from 'react'
import { Outlet, Link} from 'react-router-dom';
import { RiCloseLine } from "react-icons/ri";
import { MdMenu } from "react-icons/md";


const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true)
  }
  const menuContainer = {
    display:'flex',
    flexDirection:'column'
  }
  const leftNavBar = {
    // visibility:isOpen?'visible':'hidden',
    height:'100vh',
    backgroundColor:'#786867',
    width:'200px',
  }
  const menuItem = {
    textDecoration:'none',
    fontSize:'21px',
    padding:'12px',
  }

  const outletContainer = {
    padding:'20px',
    margin:'auto',
    // border:'2px solid red',
    width:'80vw',
    height:'94vh',
  }

  return (
    <div style={{
      display:'flex'
    }}>
      {!isOpen && <MdMenu 
        size={24} 
        style={{padding:'15px', color:'white'}}
        onClick={handleOpen}
      />}
      {isOpen && <div style={leftNavBar}>
        <div style={{display:'flex'}}>
          <h2 style={{padding:'12px'}}>DashBoard</h2>
          <RiCloseLine 
            size={23} 
            style={{padding:'12px'}}
            onClick={handleClose}
          />
        </div>
        <div style={menuContainer}>
          <Link style={menuItem} to='/firstModal'>First Modal</Link>
          <Link style={menuItem} to='/secondModal'>Second Modal</Link>
        </div>

      </div>}
      <div style={outletContainer}>
        <Outlet/>
      </div>
    </div>
  )
}

export default DashBoard