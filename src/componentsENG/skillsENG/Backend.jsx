import node from '../../assets/icons/node-js.png'
import firebase from '../../assets/icons/firebase.png'
import express from '../../assets/icons/express.png'
import mongo from '../../assets/icons/mongodb.png'





export const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

<div className="skills__box">
    <div className="skills__group">

        <div className='skills__icon'>
            <img src={node} alt="react" />
            <h3 className="skills__name">Node</h3>
        </div>

        {/* <div className='skills__icon'>
            <img src={mongo} alt="react" />
            <h3 className="skills__name">MongoDB</h3>
        </div> */}
        
    </div>

    <div className="skills__group">

        {/* <div className='skills__icon'>
            <img src={express} alt="react" />
            <h3 className="skills__name">Express</h3>
        </div> */}

        <div className='skills__icon'>
            <img src={firebase} alt="react" />
            <h3 className="skills__name">Firebase</h3>
        </div>
        
    </div>

</div>
    </div>
  )
}
