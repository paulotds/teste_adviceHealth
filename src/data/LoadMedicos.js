import {v4 as uuid} from 'uuid';

export const LoadMedicos = () => {
    return [
        {
            id: uuid(),
            name: 'Dra. Jessica',
            role: 'Dermatologia',
            imgUrl: '/medica.png'
        }, 
        {
            id: uuid(),
            name: 'Dr. Pedro',
            role: 'Neurologia',
            imgUrl: '/medico2.png'
        }, 
        {
            id: uuid(),
            name: 'Dra. Amanda',
            role: 'Pediatria',
            imgUrl: '/medica4.png'
        }, 
        {
            id: uuid(),
            name: 'Dr. Marco',
            role: 'Cardiologia',
            imgUrl: '/medico3.png'
        }, 
        {
            id: uuid(),
            name: 'Dr. Robson',
            role: 'Clinico Geral',
            imgUrl: '/medico7.png'
        }, 
        {
            id: uuid(),
            name: 'Dr. Alexandre',
            role: 'Ginecologia',
            imgUrl: '/medico5.png'
        }, 
    ]
}