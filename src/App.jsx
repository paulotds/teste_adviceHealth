import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Desktop from './pages/Desktop';
import Agendamento from './pages/Agendamento';
import Consultas from './pages/Consultas';


/*

    OK 1. criar estrutura de dados: medicos, agendamentos
    OK 2. Listar médicos
    OK 3. Listar agendamentos
    OK 4. Criar um contexto para a data
    OK 5. Criar novos agendamentos por meio do form
    OK 6. Editar agendamento
    OK 7. Excluir agendamento
    OK 8. Confirmar agendamento
    OK 9. Local Storage
    OK 10. Filtrar dadaos de agendamento baseado na data selecionada


    A fazer:
    1. Criar um componente para a data que fica do lado do título da página
    2. Colocar novas mensagens de validação quando os campos do form não estiverem prenchidos
    3. acessar TODOS os arquivos e remover código não usado
    4. Arrumar botoões de editar, cancelar e confirmar
    5. Ajusta a cor do status de agendamento na TableGeral
    6. Inserir botão de reload no calendário para resetar a data
    7. Responsividade
*/


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Desktop />} />
                <Route path='/started' element={<Desktop />} />
                <Route path='/agendamento' element={<Agendamento />} />
                <Route path='/consultas' element={<Consultas />} />
            </Route>
        </Routes>
    </BrowserRouter>
    
);
}
