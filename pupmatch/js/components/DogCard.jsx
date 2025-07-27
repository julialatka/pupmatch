import React from 'react';
import { Link } from 'react-router-dom';


function DogCard({ dog, toggleFavorite, isFavorite }) {
    return (
        <div className="dog-card">
            <img src={dog.image} alt={dog.name} />
            <h3>{dog.name}</h3>
            <p><strong>{dog.breed}</strong></p>
            <p>{dog.age}</p>
            <button onClick={() => toggleFavorite(dog)}>
                {isFavorite(dog.id) ? '❤️' : '🤍'}
            </button>
            <Link to={`/dog/${dog.id}`}>See more</Link>
        </div>
    );
}

export default DogCard;
