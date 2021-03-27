import './Spinner.css'
import React from 'react'

const Spinner = ({
  spinnerStyle = '',
  spinnerCircleStyle = ''
}) => {
  return (
    <div className={'Spinner '+spinnerStyle}>
      <span className={'Spinner__circle '+spinnerCircleStyle}></span>
    </div>
  )
}

export default React.memo(Spinner)
