import React, { useRef, useState } from "react";
import styles from "./video.module.scss";

const truncateText = (text, length) => {
  return text && text.length > length ? `${text.slice(0, length)}...` : text;
};

const videoData = [
  {
    id: 1,
    title: "MP4 Video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg", // Dummy image
  },
  {
    id: 1,
    title: "MP4 Video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg", // Dummy image
  },
  {
    id: 1,
    title: "MP4 Video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg", // Dummy image
  },
  {
    id: 1,
    title: "MP4 Video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg", // Dummy image
  },
  {
    id: 2,
    title: "YouTube Video",
    src: "https://www.youtube.com/embed/NTpbbQUBbuo",
    thumbnail: "https://img.youtube.com/vi/NTpbbQUBbuo/0.jpg",
  },
  {
    id: 3,
    title: "Another MP4",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg",
  },
  {
    id: 4,
    title: "MP4 Video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/0.jpg", // Dummy image
  },
  {
    id: 5,
    title: "YouTube Video",
    src: "https://www.youtube.com/embed/NTpbbQUBbuo",
    thumbnail: "https://img.youtube.com/vi/NTpbbQUBbuo/0.jpg",
  },
  {
    id: 6,
    title: "Another MP4",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg",
  },
  {
    id: 5,
    title: "YouTube Video",
    src: "https://www.youtube.com/embed/NTpbbQUBbuo",
    thumbnail: "https://img.youtube.com/vi/NTpbbQUBbuo/0.jpg",
  },
  {
    id: 6,
    title: "Another MP4",
    src: "https://www.w3schools.com/html/movie.mp4",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/0.jpg",
  },
];

const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]);
  const isYouTubeVideo = selectedVideo.src.includes("youtube.com");

  return (
    <>
      <div className={styles["video-section"]}>
        <h3>Videos</h3>
        <div className={styles["video-container"]}>
          {isYouTubeVideo ? (
            <iframe
              width="100%"
              // height="315"
              src={selectedVideo.src}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video controls>
              <source src={selectedVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className={styles["video-list"]}>
          {videoData.map((video) => (
            <div
              key={video.id}
              className={`${styles["list-item"]} ${
                selectedVideo.id === video.id ? styles.active : ""
              }`}
              onClick={() => setSelectedVideo(video)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className={styles["video-thumbnail"]}
              />
              {/* <span className={styles["video-title"]}>
                {truncateText(video.title, 15)}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoSection;
