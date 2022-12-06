import { Data } from "./Data";
import { Social } from "./Social";
import { ScrollDown } from "./ScrollDown";

import spain from '../../assets/icons/spain.png'
import usa from '../../assets/icons/usa.png'

import "./home.css";

export const HomeENG = ({handleChangeLenguageSpanish, handleChangeLenguageEnglish}) => {
  return (
    <section className="home section" id="home">
      <nav className="home__nav__lenguage">
        <ul className="home__nav-ul">
          <li className="home__nav-icon">
            <img onClick={handleChangeLenguageSpanish} src={spain} alt="spain" />
          </li>
          <li className="home__nav-icon">
            <img onClick={handleChangeLenguageEnglish} src={usa} alt="" />
          </li>
        </ul>
      </nav>
        <div className="home__container container ">
            <div className="home__content">
                <Social/>

                <div className="home__img"></div>

                <Data />
            </div>

            <ScrollDown/>
        </div>
    </section>
  )
}
