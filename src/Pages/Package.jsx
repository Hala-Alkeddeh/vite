import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import logoNav from './../assets/images/logo.png';

import Hero from '../Components/Hero/Hero';
import PackagesBg from './../assets/images/packages-bg.png';
import Footer from '../Components/Footer/Footer';

import city1 from './../assets/images/city-1.png';
import city2 from './../assets/images/city-2.png';
import city3 from './../assets/images/city-3.png';
import city4 from './../assets/images/city-4.png';
import city5 from './../assets/images/city-5.png';
import city6 from './../assets/images/city-6.png';
import S7 from '../Components/seventhSection/S7';
import PackageCard from '../Components/PackageCard/PackageCard';

const packagesData=[
    {img:city1,date:'27, September 2023',people:30,city:'Maldives',desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',cost:3000,stars:5.0},
    {img:city2,date:'13, October 2023',people:120,city:'Switzerland',desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',cost:1290,stars:4.9},
    {img:city3,date:'2, November 2022',people:139,city:'Berlin',desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',cost:2790,stars:5.0},
    {img:city4,date:'14, December 2022',people:50,city:'Torronto',desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',cost:1110,stars:4.0},
    {img:city5,date:'20, September 2022',people:80,city:'Baku',desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',cost:1220,stars:4.5},
    {img:city6,date:'27, August 2022',people:100,city:'Chinese',desc:'Qui tempore voluptate qui quia commodi rem praesentium alias et.',cost:2500,stars:5.0}
]

const Package = () => {
  return (
    <>
    <NavBar logo={logoNav} menu={[{title:"Home" , path:'/'} ,{title:"About", path:'/about'},{title:"Packages", path:'/packages'},{title:"Services",path:'/services'}]} btn={"Get In Touch"} />
    <Hero heroBg={PackagesBg} heroTitle={"Travel With Us"}  fontYester={true}/>
    <S7 cards={
    packagesData.map((e,i)=>{
      return(
        <PackageCard key={i} packageImg={e.img} packageDate={e.date} packagePeople={e.people} packageCity={e.city}
        packageDesc={e.desc} packageCost={e.cost} packageStars={e.stars}></PackageCard>
     )
    })}></S7>
    <Footer></Footer>
    </>
  )
}

export default Package