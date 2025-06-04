import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { rapportListState } from '../recoil/store';
import RapportList from '../components/Rapports/RapportList';
import { fetchRapports } from '../api/rapports';

const Rapports = () => {
    const rapports = useRecoilValue(rapportListState);

    useEffect(() => {
        fetchRapports();
    }, []);

    return (
        <div>
            <h1>Rapports</h1>
            <RapportList rapports={rapports} />
        </div>
    );
};

export default Rapports;