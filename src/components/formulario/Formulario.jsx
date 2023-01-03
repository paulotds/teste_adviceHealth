import './Formulario.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LoadMedicos } from '../../data/LoadMedicos';
import {v4 as uuid} from 'uuid';
import { useContext, useState } from 'react';
import { AppContext } from '../../Contextos/Context';

export default function Formulario() {

    const listaMedicos = LoadMedicos();
    const { agendamentos, setAgendamentos } = useContext(AppContext);
    const [validated, setValidated] = useState(false);

    function onSubmitForm(e){
        e.preventDefault();

        // validar o form
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);

        // criar um novo agendamento
        const novoAgendamento = {
            id: uuid(),
            userName: e.target.elements.name.value,
            userEmail: e.target.elements.email.value,
            userCpf: e.target.elements.cpf.value,
            dataAgendamento: e.target.elements.data.value,
            medico: e.target.elements.especialidade.value,
            status: 'pendente',
            protocolo: Math.floor(Math.random() * (3000 - 1000) ) + 1000,
        }

        setAgendamentos(
            [
                novoAgendamento,
                ...agendamentos
            ]
        )

        localStorage.setItem('agendamentos', JSON.stringify([
            novoAgendamento,
            ...agendamentos
        ]));

    }

    return(
        <div className="formulario">
            <Form noValidate validated={validated} onSubmit={onSubmitForm}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control type="text" placeholder="Digite aqui" required />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite aqui" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="Digite aqui" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data da consulta</Form.Label>
                    <Form.Control type="date" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="especialidade">
                    <Form.Label>Especialidade</Form.Label>
                    <Form.Select required>
                        {listaMedicos.map(medico => (
                            <option key={medico.id} value={medico.id}>{medico.role} - {medico.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agendar
                </Button>
            </Form>
        </div>
    )
}