import React, { useState } from 'react'

import {
    SearchForm, InputBlock, Label,
    Input, InputGroup, SubmitButton, SubmitButtonText
} from './styles'

interface FiltersProps {
    submitFilters: (data: Object) => void
}

const Filters: React.FC<FiltersProps> = ({ submitFilters }) => {
    const [subject, setSubject] = useState('')
    const [week_day, setWeekday] = useState('')
    const [time, setTime] = useState('')

    function handleSubmitFilters() {
        submitFilters({
            subject,
            week_day,
            time
        })

        setSubject('')
        setWeekday('')
        setTime('')
    }

    return (
        <SearchForm>
            <Label>Matéria</Label>
            <Input
                placeholder="Qual a matéria?"
                placeholderTextColor="#c1bccc"
                value={subject}
                onChangeText={text => setSubject(text)}
            />

            <InputGroup>
                <InputBlock>
                    <Label>Dia da semana</Label>

                    <Input
                        placeholder="Qual o dia?"
                        placeholderTextColor="#c1bccc"
                        value={week_day}
                        onChangeText={text => setWeekday(text)}
                    />
                </InputBlock>

                <InputBlock>
                    <Label>Horário</Label>

                    <Input
                        placeholder="Qual horário?"
                        placeholderTextColor="#c1bccc"
                        value={time}
                        onChangeText={text => setTime(text)}
                    />
                </InputBlock>
            </InputGroup>

            <SubmitButton onPress={handleSubmitFilters}>
                <SubmitButtonText>Filtrar</SubmitButtonText>
            </SubmitButton>
        </SearchForm>
    )
}

export default Filters