"use client"

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Container,
} from '@chakra-ui/react'

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element | JSX.Element[];
}

const Modal: React.FC<Props> = ({ onClose, isOpen, children }) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalCloseButton />
      <ModalBody backgroundColor={'#fff'} borderRadius={'12px 12px 0px 0px'} p={'23px 64px 64px'}>
        {children}
      </ModalBody>
    </ChakraModal>
  )
}

export default Modal;