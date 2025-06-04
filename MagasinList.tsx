import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { magasinState } from '../../atoms/index';
import { fetchMagasins } from '../../api/magasins';

const MagasinList: React.FC = () => {
    const [magasins, setMagasins] = useRecoilState(magasinState);

    useEffect(() => {
        const getMagasins = async () => {
            const data = await fetchMagasins();
            setMagasins(data);
        };

        getMagasins();
    }, [setMagasins]);

    return (
        <div>
            <h2>Liste des Magasins</h2>
            <ul>
                {magasins.map((magasin) => (
                    <li key={magasin.id}>{magasin.nom}</li>
                ))}
            </ul>
        </div>
    );
};

export default MagasinList;