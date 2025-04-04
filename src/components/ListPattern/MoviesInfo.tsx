import React from 'react';

interface MoviesInfoProps {
    movies: {
        movieTitle: string;
        moviePrice: number;
        movieDescription: string;
        movieRating: number;
    };
}
const MoviesInfo = ({ movies }: MoviesInfoProps) => {
    const { movieTitle, moviePrice, movieDescription, movieRating } = movies;

    return (
        <>
            <h1>{movieTitle}</h1>
            <p>Price: {moviePrice}</p>
            <p>Description: {movieDescription}</p>
            <p>Ratings: {movieRating}</p>
            <br />
        </>
    );
};

export default MoviesInfo;
