import { Backend } from "./Backend"
import { Frontend } from "./Frontend"

import './skills.css'




export const SkillsENG = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">Principal Skills</h2>
        <span className="section__subtitle">Mi technical level</span>

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
        </div>
    </section>
  )
}
