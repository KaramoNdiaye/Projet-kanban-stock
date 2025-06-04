import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { magasinsState } from '../recoil/store';
import { fetchMagasins } from '../api/magasins';
import MagasinList from '../components/Magasins/MagasinList';

const Magasins = () => {
    const [magasins, setMagasins] = useRecoilState(magasinsState);

    useEffect(() => {
        const loadMagasins = async () => {
            const data = await fetchMagasins();
            setMagasins(data);
        };

        loadMagasins();
    }, [setMagasins]);

    return (
        <div>
            <h1>Gestion des Magasins</h1>
            <MagasinList magasins={magasins} />
        </div>
    );
};

export default Magasins;