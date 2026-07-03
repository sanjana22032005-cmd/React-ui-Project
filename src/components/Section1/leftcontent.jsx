import React from 'react'
import Herotext from './herotext'
import Arrow from './arrow'
import Stats from './stats'
import HeroButtons from './herobuttons'

const Leftcontent = (props) => {

  return (
    <div className='h-full flex flex-col justify-between w-1/3'>
     <div>
      <Herotext/>
      <HeroButtons/>
      <Stats/>
     </div>
      <Arrow />
    </div>
  )
}

export default Leftcontent
