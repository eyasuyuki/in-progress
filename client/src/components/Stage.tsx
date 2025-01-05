import React from 'react';
import Card from './Card';

interface CardType {
    _id: string;
    title: string;
    comments: string;
}

interface StageProps {
    stage: {
        _id: string;
        title: string;
        cards: CardType[];
    };
}

const Stage: React.FC<StageProps> = ({ stage }) => {
    return (
        <div className="Stage">
            <h2>{stage.title}</h2>
            {stage.cards.map(card => (
                <Card key={card._id} card={card} />
            ))}
        </div>
    );
}

export default Stage;
