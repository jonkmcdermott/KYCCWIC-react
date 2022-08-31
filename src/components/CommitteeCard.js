import React, { useState } from 'react'
import {FaChevronDown, FaChevronRight, FaTimes} from 'react-icons/fa'
import './CommitteeCard.css'

function CommitteeCard({id, title, image, bio, isImageMissing}) {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const changeIsCardVisible = () => setIsCardVisible(!isCardVisible)

  return (
    <div id={id} className='bio-card'>
      <a href={'#'+id}>
        <div onClick={changeIsCardVisible} className='bio-card-title'>
            
          <p>{title}</p>
          {isCardVisible ? 
            (<FaChevronDown className='chevron-icon' size={20} />) 
            : (<FaChevronRight className='chevron-icon' size={20} />)
          }
          
        </div> 
      </a>

      <div className={isCardVisible ? "bio-card-body bio-card-body-visible" : "bio-card-body"}>
        <div className={isImageMissing ? 'missing-image bio-card-image-container' : 'bio-card-image-container'}>
          <img className='bio-card-image' src={image} alt={title} />
        </div>
        <div className='bio-card-text-container'>
          <p className='bio-card-text'>{bio}</p>
          <div className="bio-card-close">
            <FaTimes onClick={changeIsCardVisible} className='close-icon' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CommitteeCard