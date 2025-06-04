import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { commandesState } from '../../atoms/index';
import { fetchCommandes } from '../../api/commandes';

const CommandeList: React.FC = () => {
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
            <h2>Liste des Commandes</h2>
            <ul>
                {commandes.map((commande) => (
                    <li key={commande.id}>
                        {commande.nom} - {commande.date}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommandeList;