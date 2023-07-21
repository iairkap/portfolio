import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./spotify.module.css";
import ReactPlayer from "react-player";
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";

export default function SpotifyRecentTrack({ language }) {
  const [track, setTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchTrack = async () => {
    const playlistId = "5Qywi4uOPjRcFaU7WroWew";

    const response = await axios.post("/api/spotify", { id: playlistId });

    const tracks = response.data.map((item) => ({
      name: item.name,
      artists: item.artist,
      album: item.album,
      image: item.image,
      preview: item.preview,
      id: item.id,
    }));

    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];

    setTrack(randomTrack);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    fetchTrack();
  }, []);

  if (!track) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={styles.generalContainer}
      style={{ backgroundImage: `url(${track.image})` }}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          {" "}
          {language === "ES" ? "Reproducido recientemente" : "Recently played"}
        </h1>
        <h2 className={styles.subtitle}>{track.name}</h2>
        <h2 className={styles.subtitle}>{track.artists}</h2>
        <h3 className={styles.subtitleb}>{track.album}</h3>
        <div className={styles.audiovisual} onClick={togglePlay}>
          {isPlaying ? (
            <IoPauseSharp size={32} color="white" />
          ) : (
            <IoPlaySharp size={32} color="white" />
          )}
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`${styles.audiowire} ${
                isPlaying ? styles.animate : ""
              }`}
              id={`audio${i + 1}`}
            ></div>
          ))}
        </div>
        <ReactPlayer
          url={track.preview}
          playing={isPlaying}
          controls={true}
          width="0"
          height="0"
        />
      </div>
    </div>
  );
}
