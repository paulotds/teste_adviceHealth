import { createContext, useState } from "react";
import { LoadAgendamentos } from "../data/LoadAgendamentos";

export const AppContext = createContext();

function currentDate(){
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday;
}

export const AppProvider = ({children}) => {
    
    const listAgendamentos = LoadAgendamentos();
    const getItemFromLocalStorage = localStorage.getItem('agendamentos');
    const [agendamentos, setAgendamentos] = useState(getItemFromLocalStorage ? JSON.parse(getItemFromLocalStorage) : listAgendamentos);
    const [data, setData] = useState(currentDate());

    return (
        <AppContext.Provider value={{agendamentos, setAgendamentos, data, setData}}>
            {children}
        </AppContext.Provider>
    )
}

