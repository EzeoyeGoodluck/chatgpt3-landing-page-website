import './footer.css'
import gptLogo  from '../../assets/logo.svg'
// import gptLogo  from '../../assets/logo.png'


const  Footer = () =>{
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
        Do you want to step in to the future before others
        </h1>
        </div>
        <div className='gpt3__footer-btn'>
          <p>Request Early Access</p>
        </div>
    
      <div className='gpt3__footer-links'>
      <div className='gpt3__footer-links-logo'>
        <img src={gptLogo} alt="logo" />
        <p>Lagos Nigeria, All Rights Reserved</p>
      </div>
      <div className='gpt3__footer-links-div'>
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>contact</p>
      </div>
      <div className='gpt3__footer-links-div'>
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>contact</p>
      </div>
      <div className='gpt3__footer-links-div'>
        <h4>Get in touch</h4>
        <p>Lagos Nigeria </p>
        <p>+234 566 444 444</p>
        <p>info@gmail.com</p>
      </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>Developed BY Ezeoye Goodluck</p>
      </div>
    </div>
  )
}

export default Footer