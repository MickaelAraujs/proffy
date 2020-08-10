import React from 'react'

import {
    SearchForm, InputBlock, Label,
    Input, InputGroup, SubmitButton, SubmitButtonText
} from './styles'

const Filters = () => {
    return (
        <SearchForm>
            <Label>Matéria</Label>
            <Input
                placeholder="Qual a matéria?"
                placeholderTextColor="#c1bccc"
            />

            <InputGroup>
                <InputBlock>
                    <Label>Dia da semana</Label>

                    <Input
                        placeholder="Qual o dia?"
                        placeholderTextColor="#c1bccc"
                    />
                </InputBlock>

                <InputBlock>
                    <Label>Horário</Label>

                    <Input
                        placeholder="Qual horário?"
                        placeholderTextColor="#c1bccc"
                    />
                </InputBlock>
            </InputGroup>

            <SubmitButton>
                <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
        </SearchForm>
    )
}

export default Filters