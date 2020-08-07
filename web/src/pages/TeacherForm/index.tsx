import React from 'react'

import TeacherHeader from '../../components/TeacherHeader'
import Input from '../../components/Input'

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
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input
                        label="Matéria"
                        name="subject"
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