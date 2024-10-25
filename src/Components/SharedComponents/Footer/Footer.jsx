import React from 'react'
import Styles from './Footer.module.css'
import { Box, Text } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box className={Styles.footer}>
            <Box className={Styles.footerBottom}>
                <Box className={Styles.autoContainer}>
                    <Text> Traveg © 2024 All Right Reserved </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer