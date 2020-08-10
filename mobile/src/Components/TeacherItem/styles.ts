import styled from 'styled-components/native'

export const TeacherItemContainer = styled.View`
    background-color: #fff;
    border: 1px #e6e5f0;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
`

export const Profile = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 24px;
`

export const Avatar = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: #eee;
`

export const ProfileInfo = styled.View`
    margin-left: 16px;
`

export const Name = styled.Text`
    font-family: Archivo_700Bold;
    font-size: 20px;
    color: #32264d;
`

export const Subject = styled.Text`
    font-family: Poppins_400Regular;
    font-size: 12px;
    margin-top: 4px;
    color: #6a6180;
`

export const Bio = styled.Text`
    margin: 0 24px;
    font-family: Poppins_400Regular;
    font-size: 14px;
    line-height: 24px;
    color: #6a6180;
`

export const Footer = styled.View`
    background-color: #fafafc;
    align-items: center;
    padding: 24px;
    margin-top: 24px;
`

export const Price = styled.Text`
    font-family: Poppins_400Regular;
    font-size: 14px;
    color: #6a6180;
`

export const Value = styled.Text`
    font-family: Archivo_700Bold;
    font-size: 16px;
    color: #8257e5;
`

export const ButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 16px;
`

export const FavoriteButton = styled.TouchableOpacity`
    background-color: #8257e5;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 8px;
    margin-right: 8px;
`

export const ContactButton = styled.TouchableOpacity`
    background-color: #04d361;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 56px;
    border-radius: 8px;
    
`

export const ContactButtonText = styled.Text`
    color: #fff;
    font-family: Archivo_700Bold;
    font-size: 16px;
    margin-left: 16px;
`