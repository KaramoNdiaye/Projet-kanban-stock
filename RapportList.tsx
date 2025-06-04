import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { rapportState } from '../../atoms/index';
import { fetchRapports } from '../../api/rapports';

const RapportList: React.FC = () => {
    const [rapports, setRapports] = useRecoilState(rapportState);

    useEffect(() => {
        const getRapports = async () => {
            const data = await fetchRapports();
            setRapports(data);
        };

        getRapports();
    }, [setRapports]);

    return (
        <div>
            <h2>Liste des Rapports</h2>
            <ul>
                {rapports.map((rapport) => (
                    <li key={rapport.id}>{rapport.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RapportList;