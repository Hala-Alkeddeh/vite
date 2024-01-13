import React from 'react'
import './NavBar.css'
import menuIcon from './../../assets/images/Menu.svg'
import closemenu from './../../assets/images/closeMenu.svg'
import { Link, NavLink } from 'react-router-dom'

function changeBg(){
    let navbar = document.getElementsByTagName('nav');
    let scroll=window.scrollY;
    if(scroll < 150){
        navbar[0].classList.remove('navbarScroll')
    }
    else{
        navbar[0].classList.add('navbarScroll')
    }
}
window.addEventListener('scroll',changeBg);

const NavBar = ({logo,menu,btn}) => {
    const toggleMenu=()=>{
        let navMenu = document.getElementById('resMenu');
        navMenu.style.right='0%';
    }
    const toggleMenuClose=()=>{
        let navMenu = document.getElementById('resMenu');
        navMenu.style.right='-100%';
    }
  return (
    <nav>
        <img className='logo' src={logo} alt="logo" />
        <ul>
            {menu.map((element,index)=>{
                return(
                    <li key={index}><NavLink to={element.path} className={({isActive})=> isActive? "active":""}>{element.title}</NavLink></li>
                )
            })}
        </ul>
        <button id='btnNav'>{btn}</button>
        <button className='menuIcon' onClick={toggleMenu}><img src={menuIcon} alt="menu" /></button>
        <div className='resMenu' id='resMenu'> 
        <button className='closeMenu' onClick={toggleMenuClose}><img src={closemenu} alt="close" /></button>
            {menu.map((element,index)=>{
                return(
                    <NavLink key={index} to={element.path}  className={({isActive})=> isActive? "active":""}>{element.title}</NavLink>
                )
            })}
        <button>{btn}</button>
        </div>
    </nav>
  )
}

export default NavBar