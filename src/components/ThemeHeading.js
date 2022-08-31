import React from 'react'
import { useInView } from 'react-intersection-observer';
import './ThemeHeading.css'

function ThemeHeading() {

  //Intersection observer for animations
  const { ref: themeRef, inView: isThemeVisible } = useInView();

  return (
    <div className={isThemeVisible ? 'theme-container theme-animation' : 'theme-container'}>

      <div ref={themeRef} id='theme-heading'>
          <h1 className='theme-title title-celebrate'>Celebrate</h1>
          <h1 className='theme-title title-inform'>Inform</h1>
          <h1 className='theme-title title-support'>Support</h1>
      </div>

    </div>
    
  )
}

export default ThemeHeading