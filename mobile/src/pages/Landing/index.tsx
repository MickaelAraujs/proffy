import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {
    LandingContainer, Title, TitleBold,
    ButtonsContainer, Button, ButtonText,
    TotalConnections
} from './styles'

import LandingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

const Landing = () => {
    const { navigate } = useNavigation()

    function handleNavigateToNextPage(nextPage: string) {
        navigate(nextPage)
    }

    return (
        <LandingContainer>
            <Image
                source={LandingImg}
                style={{ width: '100%', resizeMode: 'contain' }}
            />

            <Title>
                Seja bem-vindo, {'\n'}

                <TitleBold>O que deseja fazer?</TitleBold>
            </Title>

            <ButtonsContainer>
                <Button
                    style={{ backgroundColor: '#9871f5' }}
                    onPress={() => handleNavigateToNextPage('AppTabs')}
                >
                    <Image source={studyIcon} />
                    <ButtonText>Estudar</ButtonText>
                </Button>

                <Button
                    style={{ backgroundColor: '#04d361' }}
                    onPress={() => handleNavigateToNextPage('GiveClasses')}
                >
                    <Image source={giveClassesIcon} />
                    <ButtonText>Dar aulas</ButtonText>
                </Button>
            </ButtonsContainer>

            <TotalConnections>
                Total de 250 conexões já realizadas. {' '}
                <Image source={heartIcon} />
            </TotalConnections>
        </LandingContainer>
    )
}

export default Landing