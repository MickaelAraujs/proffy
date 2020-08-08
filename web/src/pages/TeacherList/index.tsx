import React from 'react'

import TeacherHeader from '../../components/TeacherHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <TeacherHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <Select
                        label="Matéria"
                        name="subject"
                        options={[
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'História', label: 'História' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Inglês', label: 'Inglês' },
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Literatura', label: 'Literatura' },
                        ]}
                    />

                    <Select
                        label="Dia da semana"
                        name="week_day"
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <Input
                        label="Hora"
                        name="time"
                        type="time"
                    />
                </form>
            </TeacherHeader>

            <main>
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
               <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList