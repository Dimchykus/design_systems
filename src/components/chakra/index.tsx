'use client'
import React, { useState } from "react"

import { Box, Button, ChakraProvider, Heading, Text } from "@chakra-ui/react"
import { CacheProvider } from '@chakra-ui/next-js'
import { theme } from "@/core/chakra/theme"
import Modal from "./modal"

const Chakra = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <Box layerStyle='selected' w='100%' h='100%'>

        </Box>
        <Heading as={'h1'}>Chakra </Heading>
        <Box backgroundColor='grey.500' w={50} h={50}></Box>
        <Box backgroundColor='green.500' w={50} h={50} mt={3} ml={5}></Box>

        <Button colorScheme="teal" variant="solid" onClick={() => {
          setIsOpen(true)
        }}>
          Open Modal
        </Button>
        <Modal isOpen={isOpen} onClose={() => {
          setIsOpen(false)
        }}>
          <Text fontSize='4xl'>My Modal</Text>
        </Modal>
      </ChakraProvider>
    </CacheProvider>
  )
}

export default Chakra