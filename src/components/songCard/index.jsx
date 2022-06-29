import React from "react";
import AlbumImage from "./albumImages";
import AlbumInfo from "./albumInfo";
import "./SongCard.scss";

export default function SongCard({ album }) {
  return (
    <div className="songCard-body flex">
      <AlbumImage url={album?.images[0]?.url} />
      <AlbumInfo album={album} />
    </div>
  );
}
