import React, { useState } from 'react'
// import {FaChevronDown, FaChevronRight} from 'react-icons/fa'
import './CommitteeCard.css'

function CommitteeCard({id, title, image, bio, isImageMissing}) {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const changeIsCardVisible = () => setIsCardVisible(!isCardVisible)

  return (
    <div id={id} className='bio-card'>
      <p onClick={changeIsCardVisible} className='bio-card-title'>{title}</p> 
      <div className={isCardVisible ? "bio-card-body bio-card-body-visible" : "bio-card-body"}>
        <div className={isImageMissing ? 'missing-image bio-card-image-container' : 'bio-card-image-container'}>
          <img className='bio-card-image' src={image} alt={title} />
        </div>
        <div className='bio-card-text-container'>
          <p className='bio-card-text'>{bio}</p>
        </div>
      </div>
    </div>
  )
}

export default CommitteeCard