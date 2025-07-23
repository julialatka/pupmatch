import React from 'react';
import { useParams } from 'react-router-dom';
import dogs from '../data/pupmatchFAKEDATA'; // zakładam, że tak się nazywa plik

function DogDetails() {
  const { id } = useParams(); // pobiera id z URL np. /dog/3
  const dog = dogs.find((d) => d.id === Number(id)); // szuka psa o pasującym ID

  if (!dog) {
    return <p>Pies nie został znaleziony.</p>;
  }

  return (
    <div className="dog-details">
      <h2>{dog.name}</h2>
      <img src={dog.image} alt={dog.name} />
      <p><strong>Rasa:</strong> {dog.breed}</p>
      <p><strong>Wiek:</strong> {dog.age}</p>
      <p><strong>Lokalizacja:</strong> {dog.location}</p>
      <p><strong>Opis:</strong> {dog.description}</p>
    </div>
  );
}

export default DogDetails;
