import styled from 'styled-components/native'

export const LandingContainer = styled.View`
    background-color: #8257e5;
    flex: 1;
    justify-content: center;
    padding: 40px;
`

export const Title = styled.Text`
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    margin-top: 80px;
    font-family: Poppins_400Regular;
`

export const TitleBold = styled.Text`
    font-family: Poppins_600SemiBold;
`

export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
`

export const Button = styled.TouchableOpacity`
    width: 48%;
    height: 150px;
    justify-content: space-between;
    border-radius: 8px;
    padding: 24px;
`

export const ButtonText = styled.Text`
    font-family: Archivo_700Bold;
    color: #fff;
    font-size: 20px;
`

export const TotalConnections = styled.Text`
    margin-top: 40px;
    font-family: Poppins_400Regular;
    color: #d4c2ff;
    max-width: 140px;
    font-size: 12px;
    line-height: 20px;
`