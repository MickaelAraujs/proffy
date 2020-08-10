import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import Header from '../../Components/Header'
import Filters from '../../Components/Filters'
import TeacherItem, { APiTeacherProps } from '../../Components/TeacherItem'

import api from '../../services/api'

import { StudyContainer } from '../../styles'

const Study = () => {
    const [filters, setFilters] = useState([])
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleSearchFilters(data: Object) {
        const response = await api.get('classes', { params: data })

        setFilters(response.data)
    }

    return (
        <StudyContainer>
            <Header
                title="Proffys disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}    
            >
                {isFiltersVisible && <Filters submitFilters={handleSearchFilters} />}
            </Header>

            <ScrollView
                style={{ marginTop: -40 }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
                showsVerticalScrollIndicator={false}
            >   

                {filters.map((teacher: APiTeacherProps) => (
                    <TeacherItem key={teacher.id} teacher={teacher}/>
                ))}
                
            </ScrollView>
        </StudyContainer>
    )
}

export default Study