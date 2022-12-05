import { Header, Home, About, Skills, Services, Portfolio, Contact } from './components'
import './styles.css'






export const PortfolioApp = () => {
  return (
    <>
    <Header/>

    <main className="main">
        <Home/>
        <About/>
        <Skills/>
        <Portfolio/>
        <Services/>
        <Contact/>
        
    </main>
    </>
  )
}
