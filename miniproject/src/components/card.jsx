import React from 'react'
import { BsBookmark } from 'react-icons/bs'

const Card = ({ img, company, timeAgo, title, tags, rate, location }) => {
  return (
     <div className="card">
            <div className="top">
            <img src={img} alt={company}></img>
            <button>save <BsBookmark /></button>
          </div>
          <div className="center">
            <h4>{company} <span>{timeAgo}</span></h4>
            <h2>{title}</h2>
            <div className='tag'>
              {tags.map((tag, index) => (
                <h4 key={index}>{tag}</h4>
              ))}
            </div>
          </div>
            
          
          <div className="bottom">
            <div>
              <h3>{rate}</h3>
              <p>{location}</p>
            </div>
            <button>Apply now</button>
          </div>
        </div>
    
  )
}

export default Card