import getToken from "./getToken";

const getDogs = async () => {
  try {
    const token = await getToken();

    const res = await fetch("https://api.petfinder.com/v2/animals?type=dog&limit=20", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`API request failed: ${res.status}`);
    }

    const data = await res.json();
    
    // Transform API data to match your existing structure
    const transformedDogs = data.animals.map(animal => ({
      id: animal.id,
      name: animal.name || 'Unknown',
      breed: animal.breeds?.primary || 'Mixed Breed',
      age: animal.age || 'Unknown age',
      description: animal.description || 'No description available.',
      image: animal.photos?.[0]?.small || animal.photos?.[0]?.medium || 'https://placedog.net/500/300?random',
      location: animal.contact?.address ? 
        `${animal.contact.address.city || ''}, ${animal.contact.address.state || ''}`.replace(/^,\s*|,\s*$/g, '') || 'Location not specified'
        : 'Location not specified'
    }));

    return transformedDogs;
  } catch (error) {
    console.error('Error fetching dogs:', error);
    // Return empty array on error - you might want to handle this differently
    return [];
  }
};

// Function to get a single dog by ID
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
    
    // Transform single dog data to match your existing structure
    return {
      id: animal.id,
      name: animal.name || 'Unknown',
      breed: animal.breeds?.primary || 'Mixed Breed',
      age: animal.age || 'Unknown age',
      description: animal.description || 'No description available.',
      image: animal.photos?.[0]?.small || animal.photos?.[0]?.medium || 'https://placedog.net/500/300?random',
      location: animal.contact?.address ? 
        `${animal.contact.address.city || ''}, ${animal.contact.address.state || ''}`.replace(/^,\s*|,\s*$/g, '') || 'Location not specified'
        : 'Location not specified'
    };
  } catch (error) {
    console.error('Error fetching dog by ID:', error);
    throw error;
  }
};

export default getDogs;
export { getDogById };
