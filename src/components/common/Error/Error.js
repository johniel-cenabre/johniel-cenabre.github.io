import './Error.css'
import React from 'react'

const Error = ({
  errorStyle = '',
  onClick,
  errorText = 'ERROR',
  action
}) => {
  return (
    <div className={'Error '+errorStyle}>
      <h3 className="Error__text">{errorText}</h3>
      {onClick && <button className="Error__button"
              onClick={() => onClick()}>
        {action}
      </button>}
    </div>
  )
}

export default React.memo(Error)
