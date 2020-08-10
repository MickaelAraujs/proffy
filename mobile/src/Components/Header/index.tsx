import React, { ReactNode } from 'react'
import { Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'
import logoIcon from '../../assets/images/logo.png'

import {
    HeaderContainer, TopBar, HeaderTitle,
    HeaderTitleContainer
} from './styles'

interface HeaderProps {
    title: string
    headerRight?: ReactNode
}

const Header: React.FC<HeaderProps> = ({ title, children, headerRight }) => {
    const { navigate } = useNavigation()

    function handleGoBack() {
        navigate('Landing')
    }

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

            <HeaderTitleContainer>
                <HeaderTitle>{title}</HeaderTitle>

                {headerRight}
            </HeaderTitleContainer>
            

            {children}
            
        </HeaderContainer>
    )
}

export default Header