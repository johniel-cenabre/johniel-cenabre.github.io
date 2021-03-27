import './Card.css'
import React from 'react'

const Card = ({
  id = '',
  cardStyle = '',
  image = '',
  onClick,
  children
}) => {
  return (
    <div id={id}
         className={'Card '+cardStyle}
         onClick={onClick && (() => onClick())}
         style={{
           backgroundImage: `url(${image}), linear-gradient(to right, #910e45, #460822)`
         }}>
      {children}
    </div>
  )
}

export default React.memo(Card)
