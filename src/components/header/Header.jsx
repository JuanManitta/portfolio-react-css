import React, { useState } from 'react'
import './header.css'

import spain from '../../assets/icons/spain.png'
import usa from '../../assets/icons/usa.png'


export const Header = ({handleChangeLenguageEnglish, handleChangeLenguageSpanish}) => {
    //Change background header

    window.addEventListener('scroll', function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add
        ('scroll-header');
        else header.classList.remove('scroll-header');
    })
    
    // Toggle Menu
    const [Toggle, setToggle] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')


    
  return (
    <header className="header">
        <nav className="nav container">
            <a href="" className="nav__logo">
                Juan Manitta
            </a>

            <div className={Toggle 
                ? "nav__menu show-menu" 
                : "nav__menu"}>
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home" 
                            onClick={() => setActiveNav('#home')} 
                            className={activeNav === '#home'
                            ? 'nav__link active-link'
                            : 'nav__link'
                        }
                        >
                            <i className="uil uil-estate nav__icon"></i> Inicio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav('#about')} 
                            className={activeNav === '#about'
                            ? 'nav__link active-link'
                            : 'nav__link'
                        }
                        >
                            <i className="uil uil-user nav__icon"></i> Acerca de
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav('#skills')} 
                            className={activeNav === '#skills'
                            ? 'nav__link active-link'
                            : 'nav__link'
                        } 
                        >
                            <i className="uil uil-file nav__icon"></i>Habilidades
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} 
                            className={activeNav === '#portfolio'
                            ? 'nav__link active-link'
                            : 'nav__link'
                        } 
                        >
                            <i className="uil uil-scenery nav__icon"></i>Portafolio
                        </a>
                    </li>

                    {/* <li className="nav__item">
                        <a href="#services" className="nav__link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>Services
                        </a>
                    </li> */}

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav('#contac')} 
                            className={activeNav === '#contac'
                            ? 'nav__link active-link'
                            : 'nav__link'
                        } 
                        >
                            <i className="uil uil-message nav__icon"></i>Contacto
                        </a>
                    </li>

                </ul>
                <ul className='header__lenguage'>
                    <li className="nav__item">
                        <img onClick={handleChangeLenguageSpanish} src={spain} className="header__language-icon" alt="spain" />
                    </li>

                    <li className="nav__item">
                        <img onClick={handleChangeLenguageEnglish} src={usa} className="header__language-icon" alt="usa" />
                    </li>

                </ul>

                <i className="uil uil-times nav__close" 
                    onClick={() => setToggle(!Toggle)}
                ></i>
            </div>
            <div className="nav__toggle" 
                onClick={() => setToggle(!Toggle)}
            >
               <i className="uil uil-apps"></i> 
            </div>
        </nav>
    </header>
  )
}
