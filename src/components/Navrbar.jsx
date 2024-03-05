import React, { useState } from 'react'
import './css/Navbar.css'
import Logo from '../assets/Fab_logo.jpg'
import menu from '../assets/menuw.png'
import close from '../assets/close.png'


function Navbar() {
  const [under, setUnder] = useState('Home');

  const showMobile = ()=>{
    const sMobile = document.getElementById('mobile-nav') 
    sMobile.style.display='block'
  }

  const hideMobile =()=>{
    const hMobile = document.getElementById('mobile-nav')
    hMobile.style.display='none'
  }
  

  return (

    <div>
      <div className="nav-container">
      <div className="logo">
        <img src={Logo} alt="" width={'120px'} height={'60px'} />
      </div>

      {/* Desktop Navbar */}
      <ul className="nav-list" id='desktop' >
        <li onClick={()=>setUnder('Home')} >Home      {under==='Home'? <hr/> :<></> } </li>
        <li onClick={()=>setUnder('Fabrics')} >Fabrics{under==='Fabrics'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('Blogs')} >Blogs    {under==='Blogs'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('About')} >About    {under==='About'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('Contact')} >Contact{under==='Contact'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('SignUp')} >SignUp  {under==='SignUp'? <hr/> :<></> } </li>
   
      </ul>
      <div className="menu">
      <img onClick={showMobile} src={menu} alt="" width={'21px'} height={'21px'} />
      </div>

 
    
   
    
        
      
      </div>

           {/* mobile Nav bar */}
           <div className="mobile-nav" id='mobile-nav' >
      <ul className='m-navlist'  >
        <li onClick={()=>setUnder('Home')} >Home      {under==='Home'? <hr/> :<></> } </li>
        <li onClick={()=>setUnder('Fabrics')} >Fabrics{under==='Fabrics'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('Blogs')} >Blogs    {under==='Blogs'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('About')} >About    {under==='About'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('Contact')} >Contact{under==='Contact'?  <hr/>:<></> }  </li>
        <li onClick={()=>setUnder('SignUp')} >SignUp  {under==='SignUp'? <hr/> :<></> } </li>
          <li className='close' > <img onClick={hideMobile} src={close} alt="" width={'21px'} height={'21px'} />  </li>
   
      </ul>
      
      </div>
    </div>
  )
}

export default Navbar