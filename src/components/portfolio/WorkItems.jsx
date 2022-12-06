import React from 'react'

export const WorkItems = ({item}) => {
  return (
    <div className="work__card"  key={item.id}>
      <img src={item.image} alt="" className='work__img' />
      <h3 className="work__title">{item.title} <i className={item.tech1}></i></h3>
      <a href={item.demo} className="work__button">
        Demo 
        <i className='bx bxl-netlify work__button-icon'></i>
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  )
}
