import React, { useContext, useState, useRef, useEffect } from 'react'
import { ModalContext } from '../../context/ModalContext'
import View from './ModalView'

const ModalContainer = props => {
  const {modalIsOpen, closeModal} = useContext(ModalContext)
  const [isOpen, setIsOpen] = useState(false)
  const scrollX = useRef(0)
  const scrollY = useRef(0)

  useEffect(() => {
    window.addEventListener('scroll', disableScroll)
    return () => window.removeEventListener('scroll', disableScroll)
  }, [modalIsOpen])

  useEffect(() => {
    setIsOpen(modalIsOpen)
    scrollX.current = window.scrollX
    scrollY.current = window.scrollY
  }, [modalIsOpen])

  function disableScroll(e) {
    if (modalIsOpen) {
      e.preventDefault()
      window.scrollTo(scrollX.current, scrollY.current)
    }
  }

  return (
    <View
      {...props}
      isOpen={isOpen}
      closeModal={closeModal}
     />
  )
}

export default React.memo(ModalContainer)
