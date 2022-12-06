import { useState } from 'react'
import { Header, Home, About, Skills, Services, Portfolio, Contact, Footer, ScrollUp } from './components'
import { AboutENG, HomeENG, PortfolioENG, ContactENG, HeaderENG, FooterENG, SkillsENG  } from './componentsENG'
import './styles.css'






export const PortfolioApp = () => {

  const [isSpanish, setIsSpanish] = useState(true)
  const [isEnglish, setIsEnglish] = useState(false)

  const handleChangeLenguageSpanish = () =>{
    console.log('hola')
    setIsSpanish(true)
  }

  const handleChangeLenguageEnglish = () =>{
    setIsSpanish(false)
  }
  
 



  
  return (
    <>
    {
      isSpanish === true
      ? <Header 
         handleChangeLenguageSpanish={handleChangeLenguageSpanish}
         handleChangeLenguageEnglish={handleChangeLenguageEnglish}/>
      : <HeaderENG
        handleChangeLenguageSpanish={handleChangeLenguageSpanish}
        handleChangeLenguageEnglish={handleChangeLenguageEnglish}/>
    }
    


    {
      isSpanish === true
      ? <main className="main">
            <Home
              handleChangeLenguageEnglish={handleChangeLenguageEnglish}
              handleChangeLenguageSpanish={handleChangeLenguageSpanish}/>  
            <About/>
            <Skills/>
            <Portfolio/>
            {/* <Services/> */}
            <Contact/>
        </main>
      : <main className="main">
            <HomeENG
              handleChangeLenguageSpanish={handleChangeLenguageSpanish}/>  
            <AboutENG/>
            <SkillsENG/>
            <PortfolioENG/>
            {/* <Services/> */}
            <ContactENG/>
        </main>
    }

    {
      isSpanish === true
      ? <Footer/>
      : <FooterENG/>
    }

        
        <ScrollUp/>
    </>
  )
}
