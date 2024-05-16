import React from 'react'
import './Programs.css'
import '../../data/programsData'
const Programs = () => {
  return (
    <div className='Programs' id='programs'>
        {/* Header */}
        <div className="programs-header">
            <span className='stroke-text'>Explore Our</span>
            <span>Programs</span>
            <span className='stroke-text'>to shape you</span>
        </div>
    </div>
  )
}

export default Programs