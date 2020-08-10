import React from 'react'
import { ScrollView } from 'react-native'

import Header from '../../Components/Header'
import TeacherItem from '../../Components/TeacherItem'

import { StudyContainer } from '../../styles'

const Favorites = () => {
    return (
        <StudyContainer>
            <Header title="Meus proffys favoritos"/>
            
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

export default Favorites