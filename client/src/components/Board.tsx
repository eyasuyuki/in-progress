import React, { useState, useEffect } from 'react';
import Stage from './Stage';
import axios from 'axios';

interface CardType {
    _id: string;
    title: string;
    comments: string;
}

interface StageType {
    _id: string;
    title: string;
    cards: CardType[];
}

const Board: React.FC = () => {
    const [stages, setStages] = useState<StageType[]>([]);

    useEffect(() => {
        // Fetch stages from the server
        axios.get('/stages')
            .then(response => setStages(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="Board">
            {stages.map(stage => (
                <Stage key={stage._id} stage={stage} />
            ))}
        </div>
    );
}

export default Board;
