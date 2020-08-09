import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import TeacherHeader from '../../components/TeacherHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import api from '../../services/api'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherForm() {
    const history = useHistory()

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: '', to: '' }])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem
        })

        setScheduleItems(updatedScheduleItems)
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        const data = {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }

        api.post('classes', data)
        .then(() => history.push('/'))
        .catch(() => console.warn('Error: It was not possible to send data for the api. Some unexpected behavior has occured.'))
    }

    return (
        <div id="page-teacher-form" className="container">
            <TeacherHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            label="Nome completo"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                        <Input
                            label="Link da sua foto"
                            name="avatar"
                            value={avatar}
                            onChange={e => setAvatar(e.target.value)}
                        />

                        <Input
                            label="Whatsapp"
                            name="whatsapp"
                            value={whatsapp}
                            onChange={e => setWhatsapp(e.target.value)}
                        />

                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={e => setBio(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

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

                        <Input
                            label="Custo da sua hora por aula"
                            name="cost"
                            value={cost}
                            onChange={e => setCost(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis

                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index)=> {
                            return (
                                <div className="class-schedule" key={scheduleItem.week_day}>
                                    <Select
                                        label="Dia da semana"
                                        name="week_day"
                                        value={scheduleItem.week_day}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' }
                                        ]}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                    />

                                    <Input
                                        label="Das"
                                        name="from"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input
                                        label="Até"
                                        name="to"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>

                            Importante! <br />
                            preencha todos os dados
                        </p>

                        <button type='submit'>
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm