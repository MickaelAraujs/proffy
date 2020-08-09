import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { 
    GiveClassesContainer, ImageBg, Title,
    Description, Button, ButtonText
} from './styles'

import GiveClassesImageBg from '../../assets/images/give-classes-background.png'

const GiveClasses = () => {
    const { goBack } = useNavigation()

    function handleNavigateBack() {
        goBack()
    }

    return (
        <GiveClassesContainer>
            <ImageBg
                source={GiveClassesImageBg}
                resizeMode="contain"
            >

                <Title>Quer ser um Proffy?</Title>

                <Description>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Description>
            </ImageBg>

            <Button onPress={handleNavigateBack}>
                <ButtonText>Tudo bem</ButtonText>
            </Button>
        </GiveClassesContainer>
    )
}

export default GiveClasses