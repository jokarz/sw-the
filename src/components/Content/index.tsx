import React from 'react'

import Activities from './Activities'
import Teams from './Teams'

const Content = () => {

  return (
    <div className="m-8 flex text-base">
      <Teams />
      <Activities />
    </div>
  )
}

export default Content