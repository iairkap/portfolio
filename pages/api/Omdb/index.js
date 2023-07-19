import axios from "axios";

export default async (req, res) => {
  // Define la lista de películas que quieres buscar
  const lista_de_peliculas = [
    "Amelie",
    "Star Wars: Episode IV - A New Hope",
    "The Godfather",
    "The Godfather: Part II",
    "Cinema Paradiso",
    "Rear Window",
    "Toy Story",
    "Kill Bill: Vol. 1",
    "Kill Bill: Vol. 2",
    "Pulp Fiction",
    "The Shawshank Redemption",
    "The Dark Knight",
    "Avengers: Endgame",
  ];

  let resultados = [];

  // Itera sobre cada película en tu lista
  for (const pelicula of lista_de_peliculas) {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?t=${encodeURIComponent(
          pelicula
        )}&apikey=dcfcf5cd`
      );

      resultados.push(response.data);
    } catch (error) {
      console.log("Error en la solicitud de la película: ", pelicula, error);
    }
  }

  res.status(200).json(resultados);
};
