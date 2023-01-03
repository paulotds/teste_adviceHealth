import './Calendar.scss';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AppContext } from '../../Contextos/Context';

export default function Calendar() {
    const { setData, agendamentos, setAgendamentos } = useContext(AppContext);

    function updateDate(e){
        e.preventDefault();
        setData(e.target.elements.selectedDate.value);

        const filteredAgendamentos = agendamentos.filter((agendamento) => {
            return agendamento.dataAgendamento === e.target.elements.selectedDate.value;
        })

        setAgendamentos(filteredAgendamentos);
    }

    return(
        <div>
            <Form onSubmit={updateDate}>
                <Form.Group className="mb-3 form" controlId="selectedDate" >
                    <Form.Label>Selecione uma data</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>
                <Button className="btn-calendar" variant="primary" type="submit">
                    Confirmar
                </Button>
            </Form>
        </div>
    )
}