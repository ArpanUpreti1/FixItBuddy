import React, { useState } from 'react'
import { IoMdHome } from "react-icons/io";
import { MdElectricalServices } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import logo from '../../assets/logo.png'
import HeaderItems from './HeaderItems';
import { GiHamburgerMenu } from "react-icons/gi";
import ResponsiveMenu from './ResponsiveMenu';

const Header = () => {
  const [open ,setOpen] = useState(false) 
    const menu = [
        {
        name: "HOME",
        icon: IoMdHome},
        {name:"SERVICES ",   
        icon: MdElectricalServices },
        {name:"PRICING",
        icon:IoMdPricetag },
        {name:"CONTACT",
        icon:RiContactsFill }
        
    ]
  return (
    <div className='py-2 px-10'>
    <div className='sticky top-0 z-[20] mx-auto flex w-full items-center justify-between'>
        {/* Logo */}
        <div>
            <img src={logo} alt="Logo" className='h-12 w-12  md:h-18 md:w-18' />
        </div>
      <nav className='hidden md:flex gap-[4vw]'>
        {
            menu.map(
                (item,index)=>(
                    <HeaderItems key={index} name={item.name} Icon={item.icon} />
                )
            )
        }
      </nav>
      {/* Hamburger Menu */}
      <div className='md:hidden flex items-center justify-center' onClick={()=>setOpen(!open)}>  
        <GiHamburgerMenu className='text-[3vh]'/>
      </div>

      <div className='hidden md:block' >
      <img
          src="https://www.pngarts.com/files/5/Cartoon-Avatar-Transparent-Image.png"
          className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full bg-yellow-300"
          alt="User Avatar"
        />
      </div>
    </div>  
      <ResponsiveMenu open={open}/>

    </div>
  )
}

export default Header
