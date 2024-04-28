import React from "react";
import { Link } from "react-router-dom";

function Card({ movie }) {
    // Function to truncate text to a maximum of 2 lines
    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + " ...";
        } else {
            return text;
        }
    }

    return (
        <>
            <Link to={`movie/${movie.id}`} className="card h-100" style={{ width: '16rem' }}>
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top" alt="..." />
                <div className="card-body bg-dark text-white">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text overflow-auto" style={{ maxHeight: "3.6em" }}>
                        {truncateText(movie.overview, 55)}
                    </p>
                </div>
            </Link>
        </>
    );
}

export default Card;
