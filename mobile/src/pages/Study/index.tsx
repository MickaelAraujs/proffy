import React from 'react'
import { View, Text } from 'react-native'

import Header from '../../Components/Header'

import { StudyContainer } from '../../styles'


const Study = () => {
    return (
        <StudyContainer>
            <Header title="Proffys disponíveis"/>
            <Text>Eae Study</Text>
        </StudyContainer>
    )
}

export default Study