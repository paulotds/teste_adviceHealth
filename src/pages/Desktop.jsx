import '../styles/Desktop.scss';
import SearchBar from '../components/searchBar/SearchBar';
import TableHome from '../components/table/Table';
import Charts from '../components/charts/Charts';
import Calendar from '../components/calendar/Calendar';
import Medicos from '../components/medicos/Medicos';
import DateToday from '../components/date/Date';

export default function Desktop() {
    const onChange = (date) => {
        console.log(date.toString());
      };
    return (
        <div className="desktop">
            <div className="content">
                <div className="title">
                    <h2>Área de trabalho</h2>
                    <DateToday />
                </div>
                <SearchBar />
                <div className="charts">
                    <Charts />
                </div>
                <div className="table1">
                    <h2>Lembretes</h2>
                    <TableHome />
                </div>
            </div>
            
            <div className="widgets">
                <Calendar />
                <Medicos />
            </div>
        </div>
    )
};

