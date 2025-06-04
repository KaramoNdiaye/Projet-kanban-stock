import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { modelesState } from '../../atoms/index';
import { fetchModeles } from '../../api/modeles';

const ModeleList: React.FC = () => {
    const [modeles, setModeles] = useRecoilState(modelesState);

    useEffect(() => {
        const getModeles = async () => {
            const data = await fetchModeles();
            setModeles(data);
        };

        getModeles();
    }, [setModeles]);

    return (
        <div>
            <h2>Liste des Modèles</h2>
            <ul>
                {modeles.map((modele) => (
                    <li key={modele.id}>{modele.nom}</li>
                ))}
            </ul>
        </div>
    );
};

export default ModeleList;