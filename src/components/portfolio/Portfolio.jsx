import './portfolio.css'
import { Works } from './Works'

export const Portfolio = () => {
  return (
    <section className="work section" id='portfolio'>
        <h2 className="section__title">Portafolio</h2>
        <span className="section__subtitle">Trabajos mas recientes</span>
        
        <Works/>
    
    </section>
  )
}
