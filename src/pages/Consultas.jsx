import '../styles/Agendamento.scss';
import SearchBar from '../components/searchBar/SearchBar';
import Calendar from '../components/calendar/Calendar';
import Medicos from '../components/medicos/Medicos';
import Formulario from '../components/formulario/Formulario'
import TableGeral from '../components/table/TableGeral';

export default function Desktop() {
    const onChange = (date) => {
        console.log(date.toString());
      };
    return (
        <div className="agendamento">
            <div className="content">
                <div className="title">
                    <h2>Consulta de agendamentos</h2>
                    <div className="search">
                        <p>02 Jan 2023, Segunda-feira</p>
                    </div>
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

