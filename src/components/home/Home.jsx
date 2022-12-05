import { Data } from "./Data";
import { Social } from "./Social";
import { ScrollDown } from "./ScrollDown";

import "./home.css";

export const Home = () => {
  return (
    <section className="home section" id="home">
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
