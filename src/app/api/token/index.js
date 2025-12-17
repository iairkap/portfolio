import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientId: "bcd588b7826a4f1b8b46b3ce76256420",
  clientSecret: "394c74eb194b42ce999f145c8658f839",
  redirectUri: "http://localhost:3001/callback",
});

// En tu ruta de autorización
const authorize = (req, res) => {
  const authorizeURL = spotifyApi.createAuthorizeURL(["user-read-recently-played"]);
  res.redirect(authorizeURL);
};

// En tu ruta de callback
const callback = async (req, res) => {
  const { code } = req.query;
  const { body } = await spotifyApi.authorizationCodeGrant(code);
  const { refresh_token } = body;

  // Guarda el refresh_token en tu sistema para usarlo en futuras renovaciones

  res.send("Autorización completada. Puedes cerrar esta ventana.");
};

// En tu ruta para renovar el token de acceso
const refreshToken = async (req, res) => {
  const { refresh_token } = req.body;

  spotifyApi.setRefreshToken(refresh_token);
  const { body } = await spotifyApi.refreshAccessToken();
  const { access_token } = body;

  res.json({ access_token });
};

export { authorize, callback, refreshToken };
