import { useState } from 'react';
import Logo from '../../assets/logo.svg';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri'
import './navbar.css';
const Menu = () =>(
  <>
     <p><a href="#home">Home</a></p>
          <p><a href="#wgtps">What is GPT?</a></p>
          <p><a href="#possibilty">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
  </>

)

const Navbar = () => {
  const[toggleMenu , setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__links'>
        <div className='gtp3__navbar-links-logo'>
          <img src={Logo} alt="navbr logo" />
        </div>
        <div className='gtp3__navbar-links-container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>
          Sign Up
        </button>
      </div>
      <div className='gpt3_navbar_menu'>
        { toggleMenu
        ?   <RiCloseLine color= '#fff' size={27} onClick={()=>setToggleMenu(false)}/>
        : <RiMenu3Line  color= '#fff' size={27} onClick={()=>setToggleMenu(true)} /> 
        }
        {toggleMenu && (
          <div className='gtp3__navbar-menu_container scale-up-center'>
            <div className='gtp3__navbar-menu_container-links'>
              <Menu />
            <div className='gpt3__navbar-menu_container-links-sign'>
               <p>Sign in</p>
              <button type='button'>
                Sign Up
              </button>
             </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar