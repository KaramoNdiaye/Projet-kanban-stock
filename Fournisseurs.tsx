import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { fournisseurState } from '../recoil/store';
import { fetchFournisseurs } from '../api/fournisseurs';
import FournisseurList from '../components/Fournisseurs/FournisseurList';

const Fournisseurs = () => {
    const [fournisseurs, setFournisseurs] = useRecoilState(fournisseurState);

    useEffect(() => {
        const loadFournisseurs = async () => {
            const data = await fetchFournisseurs();
            setFournisseurs(data);
        };

        loadFournisseurs();
    }, [setFournisseurs]);

    return (
        <div>
            <h1>Gestion des Fournisseurs</h1>
            <FournisseurList fournisseurs={fournisseurs} />
        </div>
    );
};

export default Fournisseurs;