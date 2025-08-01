const getToken = async () => {

  const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_PETFINDER_API_KEY,
      client_secret: import.meta.env.VITE_PETFINDER_API_SECRET,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error_description || "Failed to get token");
  }

  return data.access_token;
};

export default getToken;

