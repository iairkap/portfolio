import React, { useEffect, useState } from "react";
import axios from "axios";

const SpotifyRecentTrack = () => {
  const [track, setTrack] = useState(null);

  useEffect(() => {
    const fetchRecentTrack = async () => {
      try {
        const response = await axios.get("/api/recentlyPlayed");
        setTrack(response.data);
      } catch (error) {
        console.error("Error fetching recent track:", error);
      }
    };

    fetchRecentTrack();
    ç;
  }, []);

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Recent Spotify Track</h2>
      <p>{track.name}</p>
      <p>{track.artists.map((artist) => artist.name).join(", ")}</p>
    </div>
  );
};

export default SpotifyRecentTrack;
