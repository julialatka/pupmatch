import React from 'react';

function DogCard ({dog}) {
    return (
        <div className="dog-card">
        <img src={dog.image} alt={dog.name} />
        <h3>{dog.name}</h3>
        <p><strong>{dog.breed}</strong></p>
        <p>{dog.age}</p>
        <p>{dog.location}</p>
        <p>{dog.description}</p>
        </div>
    );
}

export default DogCard;