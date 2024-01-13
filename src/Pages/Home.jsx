import React from 'react'
import NavBar from '../Components/NavBar/NavBar';
import logoNav from './../assets/images/logo.png';

import Hero from '../Components/Hero/Hero';
import HeroImg from './../assets/images/header-bg.png'

import S1 from '../Components/FirstSection/S1';
import Card from '../Components/Card/Card';
import servic1 from './../assets/images/service-1.png';
import servic2 from './../assets/images/service-2.png';
import servic3 from './../assets/images/service-3.png';
import servic4 from './../assets/images/service-4.png';

import S2 from '../Components/SecondSection/S2'; 

import S3 from '../Components/ThirdSection/S3';
import Card3 from '../Components/Card3/Card3';
import package1 from './../assets/images/n1.png';
import package2 from './../assets/images/n2.png';
import package3 from './../assets/images/n3.png';
import f1 from './../assets/images/flag-1.png';
import f2 from './../assets/images/flag-2.png';
import f3 from './../assets/images/flag-3.png';

import Footer from '../Components/Footer/Footer';

const servicesData=[
    {img:servic1,title:"Guided Tours",desciption:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {img:servic2,title:"Best Flights Options",desciption:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {img:servic3,title:"Religious Tours",desciption:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."},
    {img:servic4,title:"Medical insurance",desciption:"sunt qui repellat saepe quo velit aperiam id aliquam placeat."}
]

const packagesData=[
    {img:package1,flag:f1,town:"Switzerland",count:30,desciption:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."},
    {img:package2,flag:f2,town:"Amazon",count:60,desciption:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.."},
    {img:package3,flag:f3,town:"Giza",count:20,desciption:"Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."}
]

const Home = () => {
  return (
    <>
    <NavBar logo={logoNav} menu={[{title:"Home" , path:'/'} ,{title:"About", path:'/about'},{title:"Packages", path:'/packages'},{title:"Services" ,path:'/services'}]} btn={"Get In Touch"}/>
    <Hero heroBg={HeroImg} heroTitle={"No matter where you’re going to, we’ll take you there"} fontYester={false}/>
    <S1 sectionTitle={"CATEGORY"} selectionBig={"We Offer Best Services"} cards={
      servicesData.map((e,i)=>{
        return(
          <Card key={i} imgCard={e.img} titkeCard={e.title} desCard={e.desciption}></Card>
        )
      })} >
    </S1>
    <S2></S2>
    <S3 sectionTitle={"TRENDY"} selectionBig={"Our Trending Tour Packages"} cards={
      packagesData.map((e,i)=>{
        return(
          <Card3 key={i} imgCard={e.img} flagImg={e.flag} count={e.count} townName={e.town} desCard={e.desciption}></Card3>
        )
      })} >
    </S3>
    <Footer/>
  </>
  )
}

export default Home