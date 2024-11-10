import React from 'react'
import Styles from './TitleWrapper.module.css'
import { Box, Text } from '@chakra-ui/react'
const TitleWrapper = (props) => {
    return (
        <Box pt={'75px'}>
            <Box height={'206px'} position={'relative'} backgroundImage={props.bannerImage}>
                <Box className={Styles.title}>
                    <Text className={Styles.mnTitle}> {props.mainTitle} </Text>
                    <Text className={Styles.mnTitleSub}> {props.subTitle} </Text>
                </Box>
            </Box>
        </Box>    
    )
}

export default TitleWrapper