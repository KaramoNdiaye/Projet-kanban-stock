import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { commandesState } from '../recoil/store';
import CommandeList from '../components/Commandes/CommandeList';
import { fetchCommandes } from '../api/commandes';

const Commandes = () => {
    const [commandes, setCommandes] = useRecoilState(commandesState);

    useEffect(() => {
        const loadCommandes = async () => {
            const data = await fetchCommandes();
            setCommandes(data);
        };

        loadCommandes();
    }, [setCommandes]);

    return (
        <div>
            <h1>Gestion des Commandes</h1>
            <CommandeList commandes={commandes} />
        </div>
    );
};

export default Commandes;