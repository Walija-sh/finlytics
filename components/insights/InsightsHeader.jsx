import React from 'react'

const InsightsHeader = ({ title, description, className = "" }) => {
  return (
    <div className={`grid gap-[max(0.5px,0.0051948*(100vw-17px))] ${className}`}>
      <h2 className='font-bold heading5 leading-[1] '>
        {title}
      </h2>
      <p className="span2">{description}</p>
    </div>
  )
}

export default InsightsHeader