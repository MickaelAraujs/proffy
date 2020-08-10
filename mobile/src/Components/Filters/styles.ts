import styled from 'styled-components/native'

export const SearchForm = styled.View`
    margin-bottom: 24px;
`

export const Label = styled.Text`
    font-family: Poppins_400Regular;
    color: #d4c2ff;
`

export const Input = styled.TextInput`
    background-color: #fff;
    border-radius: 8px;
    height: 54px;
    padding: 0 16px;
    justify-content: center;
    margin-top: 4px;
    margin-bottom: 16px;
`

export const InputGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const InputBlock = styled.View`
    width: 48%;
`

export const SubmitButton = styled.TouchableOpacity`
    background-color: #04d361;
    justify-content: center;
    align-items: center;
    height: 56px;
    border-radius: 8px;
`

export const SubmitButtonText= styled.Text`
    color: #fff;
    font-family: Archivo_700Bold;
    font-size: 16px;
`
