import React from 'react';

interface CardProps {
    card: {
        _id: string;
        title: string;
        comments: string;
    };
}

const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <div className="Card">
            <h3>{card.title}</h3>
            <p>{card.comments}</p>
        </div>
    );
}

export default Card;
