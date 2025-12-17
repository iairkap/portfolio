import axios from "axios";

export default async function handler(req, res) {
  const { id } = req.body;
  const client_id = "bcd588b7826a4f1b8b46b3ce76256420";
  const client_secret = "394c74eb194b42ce999f145c8658f839";

  // Obtener el ID del usuario deseado (reemplazar con el ID del usuario real)
  const user_id = "11155846333";

  const response = await axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString("base64")}`,
    },
    data: "grant_type=client_credentials",
  });

  const token = await response.data.access_token;
  if (req.method === "GET") {
    const response2 = await axios({
      method: "get",
      url: `https://api.spotify.com/v1/users/${user_id}/playlists`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const playlists = await response2.data.items;

    res.status(200).json(playlists);
  }

  if (req.method === "POST") {
    //obtener las canciones de la playlist seleccionada
    const response3 = await axios({
      method: "get",
      url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const tracks = response3.data.items
      .filter((track) => track.track.preview_url !== null)
      .map((track) => {
        return {
          name: track.track.name,
          artist: track.track.artists[0].name,
          album: track.track.album.name,
          image: track.track.album.images[0].url,
          preview: track.track.preview_url,
          id: track.track.id,
        };
      });

    res.status(200).json(tracks);
  }
}
