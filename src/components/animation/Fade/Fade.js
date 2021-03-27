import React, { useState, useEffect } from 'react'

const Fade = ({
  fadeStyle = '',
  stagger = 0,
  duration = 0.7,
  children
}) => {
  const [shouldShow, setShouldShow] = useState(false)

  useEffect(() => {
    setShouldShow(true)
  }, [])

  return (
    <div className={'Fade '+fadeStyle}
         style={{
            opacity: shouldShow ? 1 : 0,
            transitionDuration: duration+'s',
            transitionTimingFunction: 'ease-in-out',
            transitionProperty: 'opacity',
            transitionDelay: stagger+'ms'
         }}>
      {children}
    </div>
  )
}

export default React.memo(Fade)
