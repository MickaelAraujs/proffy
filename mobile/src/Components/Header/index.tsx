import React from 'react'
import { View, Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'

import {
    HeaderContainer, TopBar, HeaderTitle
} from './styles'

interface HeaderProps {
    title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {

    function handleGoBack() {}

    return (
        <HeaderContainer>
            <TopBar>
                <BorderlessButton onPress={handleGoBack}>
                    <Image
                        source={backIcon}
                        resizeMode="contain"
                    />
                </BorderlessButton>

                <Image 
                    source={logoIcon}
                    resizeMode="contain"
                />
            </TopBar>

            <HeaderTitle>{title}</HeaderTitle>
            
        </HeaderContainer>
    )
}

export default Header