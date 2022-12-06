import { Header, Home, About, Skills, Services, Portfolio, Contact, Footer, ScrollUp } from './components'
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
        {/* <Services/> */}
        <Contact/>
    </main>

        <Footer/>
        <ScrollUp/>
    </>
  )
}
