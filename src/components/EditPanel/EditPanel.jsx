import { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LoadMedicos } from '../../data/LoadMedicos';
import {AppContext} from '../../Contextos/Context';
import './EditPanel.scss';

export default function EditPanel({show, onHide, agenda}) {
    const listaMedicos = LoadMedicos();
    const {agendamentos, setAgendamentos} = useContext(AppContext)

    // para poder alterar o valor dos inputs
    const [nome, setNome] = useState(agenda.userName);
    const [email, setEmail] = useState(agenda.userEmail);
    const [cpf, setCpf] = useState(agenda.userCpf);

    useEffect(() => {
        setNome(agenda.userName);
        setEmail(agenda.userEmail);
        setCpf(agenda.userCpf);
    }, [agenda]);

    // função para atualizar o agendamento
    function atualizarAgenda(e) {
        e.preventDefault();

        const novoAgendamento = {
            id: e.target.elements.id.value,
            userName: e.target.elements.name.value,
            userEmail: e.target.elements.email.value,
            userCpf: e.target.elements.cpf.value,
            dataAgendamento: e.target.elements.data.value,
            medico: e.target.elements.especialidade.value,
            status: e.target.elements.status.value,
            protocolo: e.target.elements.protocolo.value,
        }
        
        const agendamentosAtualizados = 
            agendamentos.map(item => {
                if(item.id === novoAgendamento.id){
                    return novoAgendamento;
                }
                return item;
            })

        setAgendamentos(agendamentosAtualizados)
        onHide();
    }

    return (
    
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Editar agendamento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

            <Form onSubmit={atualizarAgenda} >
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nome completo</Form.Label>
                    <Form.Control type="text" placeholder="Digite aqui" value={nome} onChange={e => setNome(e.target.value)} required />
                    <Form.Control.Feedback type="invalid">
                        Please choose a username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite aqui" value={email} onChange={e => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF</Form.Label>
                    <Form.Control type="text" placeholder="Digite aqui" value={cpf} onChange={e => setCpf(e.target.value)} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data da consulta</Form.Label>
                    <Form.Control type="date" placeholder="Enter email"  required />
                </Form.Group>

                <Form.Group controlId="protocolo">
                    <Form.Control type="hidden"value={agenda?.protocolo} required />
                </Form.Group>
                <Form.Group controlId="status">
                    <Form.Control type="hidden"value={agenda?.status} required />
                </Form.Group>
                <Form.Group controlId="id">
                    <Form.Control type="hidden"value={agenda?.id} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="especialidade">
                    <Form.Label>Especialidade</Form.Label>
                    <Form.Select required>
                        {listaMedicos.map(medico =>(
                            <option 
                                key={medico.id} 
                                value={medico.id}
                            >
                                {medico.role} - {medico.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Confirmar atualização
                </Button>
                <Button onClick={onHide} variant="danger">Cancelar</Button>
            </Form>
          
          
        </Modal.Body>
      </Modal>
    );
  }