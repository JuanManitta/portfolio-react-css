import github from '../../assets/icons/github.png'
import linkedin from '../../assets/icons/linkedin.png'
import twitter from '../../assets/icons/twitter.png'
import instagram from '../../assets/icons/instagram.png'


export const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.linkedin.com/in/juanmanitta/" className="home__social-icon" target="_bank">
          <img src={linkedin} alt="linkedin" />  
        </a>

        <a href="https://github.com/JuanManitta?tab=repositories" className="home__social-icon" target="_bank">
          <img src={github} alt="github" />  
        </a>

        <a href="https://twitter.com/JuanSManitta" className="home__social-icon" target="_bank">
          <img src={twitter} alt="twitter" />  
        </a>
        
        <a href="https://www.instagram.com/juansebastianmanitta/" className="home__social-icon" target="_bank">
          <img src={instagram} alt="instagram" />  
        </a>

        
    </div>
  )
}
