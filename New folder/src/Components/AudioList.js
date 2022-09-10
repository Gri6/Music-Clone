import React, { useState } from "react";
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";
import MusicPlayer from "./MusicPlayer";
import { Songs } from "./Songs";

const AudioList = () => {
  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    srtIamge(imgSrc);
  };

  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, srtIamge] = useState(Songs[0].imgSrc);
  const changeFavorite = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }

      setSong([...Songs]);
    });
  };
  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{`${Songs.length} songs`}</span>
      </h2>

      <div className="songsCoantainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.imgSrc)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.imgSrc} />
                </div>

                <div className="section">
                  <p className="songName">
                    {song?.songName}
                    <span className="spanArtist">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      96.435.436
                    </p>

                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03.05
                    </p>

                    <div
                      className="favorite"
                      onClick={() => changeFavorite(song?.id)}
                    >
                      {song?.favourite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer imgSrc={img} song={song} />
    </div>
  );
};

export { AudioList };
