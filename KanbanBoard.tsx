import React from 'react';
import { useRecoilValue } from 'recoil';
import { kanbanState } from '../../recoil/store';
import KanbanColumn from './KanbanColumn';

const KanbanBoard: React.FC = () => {
    const kanbanData = useRecoilValue(kanbanState);

    return (
        <div className="kanban-board">
            {kanbanData.map((column) => (
                <KanbanColumn key={column.id} column={column} />
            ))}
        </div>
    );
};

export default KanbanBoard;