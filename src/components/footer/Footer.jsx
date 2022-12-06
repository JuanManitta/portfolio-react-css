import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'
import twitter from '../../assets/icons/twitter.png'
import instagram from '../../assets/icons/instagram.png'

import './footer.css'


export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Juan</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">Acerca de</a>
          </li>
          
          <li>
            <a href="#portfolio" className="footer__link">Projectos</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Habilidades</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.linkedin.com/in/juanmanitta/" className="footer__social-link" target="_bank">
          <img src={linkedin} alt="linkedin" />  
        </a>

        <a href="https://github.com/JuanManitta?tab=repositories" className="footer__social-link" target="_bank">
          <img src={github} alt="github" />  
        </a>

        <a href="https://twitter.com/JuanSManitta" className="footer__social-link" target="_bank">
          <img src={twitter} alt="twitter" />  
        </a>
        
        <a href="https://www.instagram.com/juansebastianmanitta/" className="footer__social-link" target="_bank">
          <img src={instagram} alt="instagram" />  
        </a>
        </div>
        <span className="footer__copy">&#169; Juan Sebastian Manitta. All
        rights reserved</span>
      </div>
    </footer>
  )
}
