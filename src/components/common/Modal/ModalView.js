import './Modal.css'
import React from 'react'

const ModalView = ({
  id = '',
  modalContainerStyle = '',
  isOpen,
  title,
  closeModal,
  children
}) => {
  return (
    <div id={id}
         className={"Modal"}
         style={{
           visibility: isOpen ? 'visible' : 'hidden',
           opacity: isOpen ? 1 : 0,
           transition: 'all 0.3s ease-in-ease-out'
         }}>
      <div className="Modal__blur"
           onClick={() => closeModal()}></div>
      <div className="Modal__wrapper">
        <div className={'Modal__container '+modalContainerStyle}>
          <div className="Modal__header">
            <h4 className="Modal__title">{title}</h4>
            <button className="Modal__close"
                    onClick={() => closeModal()}>x</button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ModalView)
