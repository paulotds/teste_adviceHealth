import '../styles/Agendamento.scss';
import Calendar from '../components/calendar/Calendar';
import Medicos from '../components/medicos/Medicos';
import TableGeral from '../components/table/TableGeral';
import DateToday from '../components/date/Date';
import '../styles/Consultas.scss';

export default function Desktop() {
    const onChange = (date) => {
        console.log(date.toString());
      };
    return (
        <div className="agendamento">
            <div className="content">
                <div className="title">
                    <h2>Consulta de agendamentos</h2>
                    <DateToday />
                </div>
                <div className="tabelaGeral">
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

