import getToken from "./getToken";

// Helper - transformacja danych z API do mojego formatu
const transformAnimal = (animal) => ({
  id: animal.id,
  name: animal.name || 'Unknown',
  breed: animal.breeds?.primary || 'Mixed Breed',
  age: animal.age || 'Unknown age',
  description: animal.description || 'No description available.',
  image: animal.photos?.[0]?.small || animal.photos?.[0]?.medium,
  location: animal.contact?.address?.city || animal.contact?.address?.state || 'Location not specified.',
  gender: animal.gender || 'Unknown',
  coat: animal.coat || 'Unknown'
});

const getDogs = async () => {
  try {
    const token = await getToken();

    const res = await fetch("https://api.petfinder.com/v2/animals?type=dog&limit=20&sort=random", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`API request failed: ${res.status}`);
    }

    const data = await res.json();
    
    // Filtr na psy ze zdjęciami
    const dogsWithPhotos = data.animals.filter(animal => 
      animal.photos && animal.photos.length > 0
    );
    
    // Transformacja danych z API do mojego formatu
    const transformedDogs = dogsWithPhotos.map(transformAnimal);

    return transformedDogs;
  } catch (error) {
    console.error('Error fetching dogs:', error);
    // Pusta tablica w przypadku błędu
    return [];
  }
};

// Funkcja do pobierania pojedynczego psa po ID
const getDogById = async (id) => {
  try {
    const token = await getToken();

    const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Dog not found');
      }
      throw new Error(`API request failed: ${res.status}`);
    }

    const data = await res.json();
    const animal = data.animal;
    
    // Transformacja danych z API dla jednego psa do mojego formatu
    return transformAnimal(animal);
  } catch (error) {
    console.error('Error fetching dog by ID:', error);
    throw error;
  }
};

export default getDogs;
export { getDogById };
