import { CheckSquareFill, PencilSquare, TrashFill } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import './TableGeral.scss'
import { AppContext } from '../../Contextos/Context';
import { useContext, useState } from 'react';
import EditPanel from '../EditPanel/EditPanel';

export default function TableGeral() {

  const { agendamentos, setAgendamentos } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);
  const [editarAgenda, setEditarAgenda] = useState(null);

  function abrirModal(agenda){
    setEditarAgenda(agenda);
    setModalShow(true);
  }

  function removerAgenda(id){
    
    if (confirm("Tem certeza que quer deletar esse agendamento?")) {
      const agendamentosAtualizados = agendamentos.map((agenda) => {
        if(agenda.id === id){
          agenda.status = 'cancelado';
        }
        return agenda;
      });
      setAgendamentos(agendamentosAtualizados);
    }
  }

  function confirmarAgendamento(id){
    if (confirm("Tem certeza que quer confirmar esse agendamento?")) {
      const agendamentosAtualizados = agendamentos.map((agenda) => {
        if(agenda.id === id){
          agenda.status = 'confirmado';
        }
        return agenda;
      });
      setAgendamentos(agendamentosAtualizados);
    }
  }

  return (
    <>
      {editarAgenda && <EditPanel
        show={modalShow}
        onHide={() => setModalShow(false)}
        agenda={editarAgenda}
      />}

      <Table>
        <thead className="topo">
          <tr>
          
            <th>Paciente</th>
            <th>Protocolo</th>
            <th>E-mail</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        {
            agendamentos.map((agenda) => (
              <tr key={agenda.id}>
                <td>{agenda.userName}</td>
                <td>{agenda.protocolo}</td>
                <td>{agenda.userEmail}</td>
                <td>{agenda.dataAgendamento}</td>
                <td>{agenda.status}</td>
                <td className="action">
                  <button className="edit" onClick={() => abrirModal(agenda)} href=""><PencilSquare /></button>
                  <button className="remove" onClick={e => removerAgenda(agenda.id)} href=""><TrashFill /></button>
                  <button className="confirm" onClick={e => confirmarAgendamento(agenda.id)} href=""><CheckSquareFill /></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  );
}
