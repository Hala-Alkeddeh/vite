import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import logoNav from './../assets/images/logo.png';

import Hero from '../Components/Hero/Hero';
import AboutBg from './../assets/images/about-bg.png';

const Services = () => {
  return (
    <div>
        <NavBar logo={logoNav} menu={[{title:"Home" , path:'/'} ,{title:"About", path:'/about'},{title:"Packages", path:'/packages'},{title:"Services",path:'/services'}]} btn={"Get In Touch"} />
        <Hero heroBg={AboutBg} heroTitle={"Services"}  fontYester={true}/>
    </div>
  )
}

export default Services