import './Footer.css'
import logo from './../../assets/images/footer-logo.svg'
import linledin from './../../assets/images/linkedin.svg'
import messenger from './../../assets/images/messenger.svg'
import twitter from './../../assets/images/twitter.svg'
import twoo from './../../assets/images/twoo.svg'
import footerbg from './../../assets/images/footer-bg.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerContent'  style={{backgroundImage:`url(${footerbg})`}}>
            <div className='firstF'>
                <img src={logo} alt="logo" />
                <p>Travel helps companies manage payments easily.</p>
                <div>
                    <img src={linledin}/>
                    <img src={messenger}/>
                    <img src={twitter}/>
                    <img src={twoo}/>
                </div>
            </div>
            <div className='secF'>
                <h1>Company</h1>
                <p>About Us</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Pricing</p>
            </div>
            <div className='thirdF'>
                <h1>Destinations</h1>
                <p>Maldives</p>
                <p>Los Angelas</p>
                <p>Las Vegas</p>
                <p>Torronto</p>
            </div>
        </div>
        <div className='footerCopyright'>
            <p className='copyrights'>Copyright @ Xpro 2023 All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;