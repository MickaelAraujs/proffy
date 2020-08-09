import React, { useState, FormEvent } from 'react'

import TeacherHeader from '../../components/TeacherHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import api from '../../services/api'

import './styles.css'

function TeacherList() {
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [weekday, setWeekday] = useState('')
    const [time, setTime] = useState('')

    async function searchTeachers(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('classes', {
            params: {
                subject,
                week_day: weekday,
                time
            }
        })

        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <TeacherHeader title="Estes são os proffys disponíveis.">
                <form onSubmit={searchTeachers} id="search-teachers">
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
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
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
                        value={weekday}
                        onChange={e => setWeekday(e.target.value)}
                    />

                    <Input
                        label="Hora"
                        name="time"
                        type="time"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </TeacherHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem teacher={teacher}/>
                })}
            </main>
        </div>
    )
}

export default TeacherList