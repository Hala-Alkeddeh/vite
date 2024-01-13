import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import logoNav from './../assets/images/logo.png';

import Hero from '../Components/Hero/Hero';
import AboutBg from './../assets/images/about-bg.png';
import Footer from '../Components/Footer/Footer';
import S4 from '../Components/FourthSection/S4';
import promotionImg from './../assets/images/promotion_img.png'
import S5 from '../Components/FifthSection/S5';
import s6img from './../assets/images/TourPlans-img.png'
import S6 from '../Components/sixthSection/S6';


const About = () => {
  return (
    <>
    <NavBar logo={logoNav} menu={[{title:"Home" , path:'/'} ,{title:"About", path:'/about'},{title:"Packages", path:'/packages'},{title:"Services",path:'/services'}]} btn={"Get In Touch"} />
    <Hero heroBg={AboutBg} heroTitle={"About Us"}  fontYester={true}/>
    <S4 sectionTitle='Promotion' selectionBig='We Provide You Best Europe Sightseeing Tours' 
    sectionDescreption='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a 
    laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi 
    aut ducimus illum aut optio quibusdam!' promotion={promotionImg} btn='View Package'></S4>
    <S5></S5>
    <S6 s6img={s6img} sectionTitle='TREND' selectionBig='Our Popular Tour Plans'
    sectionDescreption='Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.
    Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium.'></S6>
    <Footer></Footer>
    </>
  )
}

export default About