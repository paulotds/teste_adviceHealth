import {v4 as uuid} from 'uuid';

export const LoadAgendamentos = () => {
    return [
        {
            id: uuid(),
            userName: 'Cliente 1',
            userEmail: 'cliente1@gmail.com',
            userCpf: '000.000.000-00',
            dataAgendamento: '2023-01-17',
            medico: 'Dra. Jessica',
            status: 'pendente',
            protocolo: '123456',
        }, 
        {
            id: uuid(),
            userName: 'Cliente 2',
            userEmail: 'cliente2@gmail.com',
            userCpf: '000.000.000-00',
            dataAgendamento: '2023-01-18',
            medico: 'Dr. Pedro',
            status: 'cancelado',
            protocolo: '78910',
        }, 
        {
            id: uuid(),
            userName: 'Cliente 3',
            userEmail: 'cliente3@gmail.com',
            userCpf: '000.000.000-00',
            dataAgendamento: '2023-01-20',
            medico: 'Dra. Amanda',
            status: 'confirmado',
            protocolo: '123456',
        }, 
    ]
}