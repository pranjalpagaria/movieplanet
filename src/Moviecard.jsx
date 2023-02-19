import React from 'react'

export default function Moviecard({movie}) 
{
    return (
        <div>

            <div className="movie">


                <div>
                    <p>{movie.Year}</p>
                </div>

                <div>
                    <img src={movie.Poster !== 'N/a' ? movie.Poster : "httpsvia.placeholder.com/400"} alt={movie.Title} />
                </div>
                <div>
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                </div>

            </div>

        </div>
    )
}
