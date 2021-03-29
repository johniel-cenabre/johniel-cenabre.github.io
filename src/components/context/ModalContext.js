import React, { createContext, useCallback, useState } from 'react'

export const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = useCallback(() => {
    setModalIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setModalIsOpen(false)
  }, [])

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
