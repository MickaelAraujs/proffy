import React from 'react'
import { Image } from 'react-native'

import {
    LandingContainer, Title, TitleBold
} from './styles'

import LandingImg from '../../assets/images/landing.png'

const Landing = () => {
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
        </LandingContainer>
    )
}

export default Landing