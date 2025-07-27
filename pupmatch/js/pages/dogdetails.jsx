import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDogById } from '../api/getDogs';

function DogDetails() {
  const { id } = useParams(); // pobiera id z URL np. /dog/527
  const [dog, setDog] = useState(null); //dane psa
  const [loading, setLoading] = useState(true); //obsługa stanu ładowania (true - ładowanie, false - załadowanie)
  const [error, setError] = useState(null); //obsługa błędów

  useEffect(() => {
    const fetchDog = async () => {
      try {
        setLoading(true);
        setError(null);
        const dogData = await getDogById(id); // pytam API o psa z ID='....'
        setDog(dogData); // zapisuje dane psa w dog
      } catch (error) {
        console.error('Error loading dog:', error);
        setError('Dog not found or failed to load.');
      } finally {
        setLoading(false);
      }
    };

    fetchDog();
  }, [id]);

  if (loading) {
    return <p>Loading dog details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!dog) {
    return <p>Dog not found.</p>;
  }

  return (
    <div className="dog-details">
      <h2>{dog.name}</h2>
      <img src={dog.image} alt={dog.name} />
      <p><strong>Breed:</strong> {dog.breed}</p>
      <p><strong>Age:</strong> {dog.age}</p>
      <p><strong>Gender:</strong> {dog.gender}</p>
      <p><strong>Coat:</strong> {dog.coat}</p>
      <p><strong>Location:</strong> {dog.location}</p>
      <p><strong>Description:</strong> {dog.description}</p>
    </div>
  );
}

export default DogDetails;
