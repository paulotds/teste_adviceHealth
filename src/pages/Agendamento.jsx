import '../styles/Agendamento.scss';
import SearchBar from '../components/searchBar/SearchBar';
import Calendar from '../components/calendar/Calendar';
import Medicos from '../components/medicos/Medicos';
import Formulario from '../components/formulario/Formulario'
import TableGeral from '../components/table/TableGeral';
import { useContext } from 'react';
import { AppContext } from '../Contextos/Context';
import DateToday from '../components/date/Date';

export default function Desktop() {
    
    const {data} = useContext(AppContext)
    const showDate =  new Date(data);

    return (
        <div className="agendamento">
            <div className="content">
                <div className="title">
                    <h2>Agendamento de consultas</h2>
                    <DateToday />
                </div>
                <Formulario />
                <div className="title agenda">
                    <h2>Agenda</h2>
                </div>
                <div className="agendaGeral">
                    <TableGeral />
                </div>  
            </div>
            
            <div className="widgets">
                <Calendar />
                <Medicos className="medicos" />
            </div>
        </div>
    )
};

