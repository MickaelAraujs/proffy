import React from 'react'
import { Text } from 'react-native'

import Header from '../../Components/Header'

import { StudyContainer } from '../../styles'

const Favorites = () => {
    return (
        <StudyContainer>
            <Header title="Meus proffys favoritos"/>
            <Text>Favorites</Text>
        </StudyContainer>
    )
}

export default Favorites