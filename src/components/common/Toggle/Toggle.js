import './Toggle.css'
import React from 'react'

const Toggle = ({
  toggleStyle = '',
  leftTextStyle = '',
  rightTextStyle = '',
  toggleButtonStyle = '',
  leftText,
  rightText,
  onChange
}) => {
  return (
    <div className={'Toggle '+toggleStyle}>
      <input className="Toggle__input" type="checkbox" onChange={e => onChange(e)} />
      {leftText && <label className={'Toggle__left-text '+leftTextStyle}>{leftText}</label>}
      <button className={'Toggle__button '+toggleButtonStyle}></button>
      {rightText && <label className={'Toggle__right-text '+rightTextStyle}>{rightText}</label>}
    </div>
  )
}

export default React.memo(Toggle)
