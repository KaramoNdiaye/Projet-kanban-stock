import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { dashboardDataState } from '../recoil/store';
import KanbanBoard from '../components/Dashboard/KanbanBoard';
import { fetchDashboardData } from '../api/dashboard';

const Dashboard: React.FC = () => {
    const dashboardData = useRecoilValue(dashboardDataState);

    useEffect(() => {
        const loadData = async () => {
            await fetchDashboardData();
        };
        loadData();
    }, []);

    return (
        <div>
            <h1>Tableau de Bord</h1>
            <KanbanBoard data={dashboardData} />
        </div>
    );
};

export default Dashboard;