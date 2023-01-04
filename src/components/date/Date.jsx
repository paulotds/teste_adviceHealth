import './Date.scss';
import { useContext } from 'react';
import { AppContext } from '../../Contextos/Context';

export default function DateToday() {

    const {data} = useContext(AppContext)
    const showDate =  new Date(data);
    return(
        <div className="search">
            <p>{
                new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric'} ).format(showDate)
            }</p>
        </div>
    )
}