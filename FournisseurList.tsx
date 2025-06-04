import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fournisseurListState } from '../../atoms/index';
import { fetchFournisseurs } from '../../api/fournisseurs';

const FournisseurList: React.FC = () => {
    const [fournisseurs, setFournisseurs] = useRecoilState(fournisseurListState);

    useEffect(() => {
        const getFournisseurs = async () => {
            const data = await fetchFournisseurs();
            setFournisseurs(data);
        };

        getFournisseurs();
    }, [setFournisseurs]);

    return (
        <div>
            <h2>Liste des Fournisseurs</h2>
            <ul>
                {fournisseurs.map((fournisseur) => (
                    <li key={fournisseur.id}>{fournisseur.nom}</li>
                ))}
            </ul>
        </div>
    );
};

export default FournisseurList;