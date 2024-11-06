import React from 'react'
import LogoImage from './GoSolo.png'
import { Image } from '@chakra-ui/react'

const Logo = () => {
    return (
        <Image
            src={LogoImage}
            alt="Logo"
            maxH="40px"
            fallbackSrc="https://via.placeholder.com/150"
        />
    )
}

export default Logo