import './Medicos.scss';
import { LoadMedicos } from '../../data/LoadMedicos';

export default function Medicos() {
    const listaMedicos = LoadMedicos();

    return(
        <div className="medicos">
            <div className="title">
                <h2>Médicos</h2>
            </div>
            <div className="medico">

                {listaMedicos.map(medico => (
                    <div className="colaborador" key={medico.id}>
                        <img src={medico.imgUrl} alt={medico.name} />
                        <div className="info">
                            <strong>{medico.name}</strong>
                            <small>{medico.role}</small>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}