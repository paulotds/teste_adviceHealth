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
            role: 'Dermatologia',
            imgUrl: '/medica.png'
        }, 
        {
            id: uuid(),
            name: 'Dra. Amanda',
            role: 'Dermatologia',
            imgUrl: '/medica.png'
        }, 
        {
            id: uuid(),
            name: '4 Dra. Jéssica Alves',
            role: 'Dermatologia',
            imgUrl: '/medica.png'
        }, 
        {
            id: uuid(),
            name: '5 Dra. Jéssica Alves',
            role: 'Dermatologia',
            imgUrl: '/medica.png'
        }, 
    ]
}