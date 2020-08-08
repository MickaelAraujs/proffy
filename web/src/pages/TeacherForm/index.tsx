import React from 'react'

import TeacherHeader from '../../components/TeacherHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <TeacherHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição."
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input
                        label="Nome completo"
                        name="name"
                    />

                    <Input
                        label="Link da sua foto"
                        name="avatar"
                    />

                    <Input
                        label="Whatsapp"
                        name="whatsapp"
                    />

                    <Textarea name="bio" label="Biografia" />
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
                    />

                    <Input
                        label="Custo da sua hora por aula"
                        name="cost"
                    />
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>

                        Importante! <br />
                        preencha todos os dados
                    </p>

                    <button type='button'>
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm