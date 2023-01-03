import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { AppContext } from '../../Contextos/Context';
import './Table.scss'

export default function TableHome() {

  const { agendamentos } = useContext(AppContext)
  const statusAgendamento = {
    pendente: 'pendent',
    cancelado: 'failed',
    confirmado: 'success'
  }

  return (
    <Table>
      <thead className="topo">
        <tr>
          <th>Cliente</th>
          <th>Protocolo</th>
          <th>Data</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {agendamentos.map(agenda => (
          <tr key={agenda.id}>
            <td>{agenda.userName}</td>
            <td>{agenda.protocolo}</td>
            <td>{agenda.dataAgendamento}</td>
            <td><small className={statusAgendamento[agenda.status]}>{agenda.status}</small></td>
          </tr>
        )
        )}
      </tbody>
    </Table>
  );
}
