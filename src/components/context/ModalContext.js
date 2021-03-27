import React, { createContext, useState } from 'react'

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default React.memo(ModalContextProvider)
