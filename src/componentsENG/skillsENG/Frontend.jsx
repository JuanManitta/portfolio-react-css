import react from '../../assets/icons/react.png'
import html from '../../assets/icons/html.png'
import javascript from '../../assets/icons/javascript.png'
import material from '../../assets/icons/material.png'
import css3 from '../../assets/icons/css3.png'
import typescript from '../../assets/icons/typescript.png'
import redux from '../../assets/icons/redux.png'
import bootstrap from '../../assets/icons/bootstrap.png'


export const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend Developer</h3>

        <div className="skills__box">
            <div className="skills__group">

                <div className='skills__icon'>
                    <img src={html} alt="react" />
                    <h3 className="skills__name">html</h3>
                </div>


                <div className='skills__icon'>
                    <img src={css3} alt="react" />
                    <h3 className="skills__name">CSS</h3>
                </div>

                <div className='skills__icon'>
                    <img src={bootstrap} alt="bootstrap" />
                    <h3 className="skills__name">Bootstrap</h3>
                </div>
                

                <div className='skills__icon'>
                    <img src={javascript} alt="react" />
                    <h3 className="skills__name">JavaScript</h3>
                </div>

            </div>

            <div className="skills__group">

                <div className='skills__icon'>
                    <img src={material} alt="react" />
                    <h3 className="skills__name">MUI</h3>
                </div>


                <div className='skills__icon'>
                    <img src={react} alt="react" />
                    <h3 className="skills__name">React</h3>
                </div>

                <div className='skills__icon'>
                    <img src={redux} alt="redux" />
                    <h3 className="skills__name">Redux</h3>
                </div>


                {/* <div className='skills__icon'>
                    <img src={typescript} alt="react" />
                    <h3 className="skills__name">Typescript</h3>
                </div> */}
            </div>
        </div>
    </div>
  )
}
