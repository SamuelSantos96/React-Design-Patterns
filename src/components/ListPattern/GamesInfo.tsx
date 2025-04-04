import React from 'react';

interface GamesInfoProps {
    games: {
        gameName: string;
        gameRating: number;
        gameGenre: string;
        gameLanguages: string[];
    };
}

const GamesInfo = ({ games }: GamesInfoProps) => {
    const { gameName, gameRating, gameGenre, gameLanguages } = games;
    return (
        <div>
            <h1>Game Name: {gameName}</h1>
            <p>Game Rating: {gameRating}</p>
            <p>Game Genre: {gameGenre}</p>
            <ul>
                Languages:{' '}
                {gameLanguages.map((l: string) => (
                    <li>{l}</li>
                ))}
            </ul>
            <br />
        </div>
    );
};

export default GamesInfo;
