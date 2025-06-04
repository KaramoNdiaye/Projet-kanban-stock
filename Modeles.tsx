import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { modelesState } from '../recoil/store';
import { fetchModeles } from '../api/modeles';
import ModeleList from '../components/Modeles/ModeleList';

const Modeles = () => {
    const [modeles, setModeles] = useRecoilState(modelesState);

    useEffect(() => {
        const loadModeles = async () => {
            const data = await fetchModeles();
            setModeles(data);
        };

        loadModeles();
    }, [setModeles]);

    return (
        <div>
            <h1>Gestion des Modèles</h1>
            <ModeleList modeles={modeles} />
        </div>
    );
};

export default Modeles;