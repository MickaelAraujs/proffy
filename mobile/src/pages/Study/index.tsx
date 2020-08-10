import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import Header from '../../Components/Header'
import Filters from '../../Components/Filters'
import TeacherItem from '../../Components/TeacherItem'

import { StudyContainer } from '../../styles'

const Study = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
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
                {isFiltersVisible && <Filters />}
            </Header>

            <ScrollView
                style={{ marginTop: -40 }}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
                showsVerticalScrollIndicator={false}
            >
                <TeacherItem />

                <TeacherItem />

                <TeacherItem />

                <TeacherItem />
            </ScrollView>
        </StudyContainer>
    )
}

export default Study