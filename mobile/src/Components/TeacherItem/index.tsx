import React, { useState } from 'react'
import { Image, Linking } from 'react-native'

import {
    TeacherItemContainer, Profile, Avatar,
    ProfileInfo, Name, Subject, Bio, Footer,
    Price, Value, ButtonsContainer,FavoriteButton, ContactButton, ContactButtonText
} from './styles'

import favoriteIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

export interface APiTeacherProps {
    id: number
    avatar: string
    name: string
    bio: string
    whatsapp: string
    subject: string
    cost: number
}

interface TeacherProps {
   teacher: APiTeacherProps
}

const TeacherItem: React.FC<TeacherProps> = ({ teacher }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    function handleFavoriteChange() {
        setIsFavorite(!isFavorite)
    }

    function handleLinkToWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }

    return (
        <TeacherItemContainer>
            <Profile>
                <Avatar 
                    source={{ uri: teacher.avatar}}
                />

                <ProfileInfo>
                    <Name>{teacher.name}</Name>

                    <Subject>{teacher.subject}</Subject>
                </ProfileInfo>
            </Profile>

            <Bio>
               {teacher.bio}
            </Bio>

            <Footer>
                <Price>
                    Preço/hora {'   '}
                    <Value>R$ {teacher.cost}</Value>
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

                    <ContactButton
                        onPress={handleLinkToWhatsapp}
                    >
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