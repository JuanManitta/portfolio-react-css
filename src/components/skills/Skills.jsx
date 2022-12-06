import { Backend } from "./Backend"
import { Frontend } from "./Frontend"

import './skills.css'




export const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">Habilidades Principales</h2>
        <span className="section__subtitle">Mi nivel técnico</span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}
