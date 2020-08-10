import React, { useState } from 'react'
import { Image } from 'react-native'

import {
    TeacherItemContainer, Profile, Avatar,
    ProfileInfo, Name, Subject, Bio, Footer,
    Price, Value, ButtonsContainer,FavoriteButton, ContactButton, ContactButtonText
} from './styles'

import favoriteIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

const TeacherItem = () => {
    const [isFavorite, setIsFavorite] = useState(false)

    function handleFavoriteChange() {
        setIsFavorite(!isFavorite)
    }

    return (
        <TeacherItemContainer>
            <Profile>
                <Avatar 
                    source={{ uri: 'https://github.com/MickaelAraujs.png' }}
                />

                <ProfileInfo>
                    <Name>Mickael Araujo</Name>

                    <Subject>Física</Subject>
                </ProfileInfo>
            </Profile>

            <Bio>
                Entusiasta das melhores tecnologias de química avançada.
                {'\n \n'}
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </Bio>

            <Footer>
                <Price>
                    Preço/hora {'   '}
                    <Value>R$ 100,00</Value>
                </Price>

                <ButtonsContainer>
                    <FavoriteButton
                        style={isFavorite && { backgroundColor: '#e33d3d' }}
                        onPress={handleFavoriteChange}
                    >
                        {!isFavorite ? (
                            <Image
                            source={favoriteIcon}
                            />
                        ) : (
                            <Image
                            source={unfavoriteIcon}
                            />
                        )}    
                    </FavoriteButton>

                    <ContactButton>
                        <Image
                            source={whatsappIcon}
                        />

                        <ContactButtonText>Entrar em contato</ContactButtonText>
                    </ContactButton>
                </ButtonsContainer>
            </Footer>
        </TeacherItemContainer>
    )
}

export default TeacherItem