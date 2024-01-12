import React from "react";

const LoomVideo = ({ src, paddingBottom }) => (
  <div
    style={{
      position: "relative",
      paddingBottom: `${paddingBottom}%`,
      height: 0,
    }}
  >
    <iframe
      src={src}
      frameBorder="0"
      webkitAllowFullScreen
      mozAllowFullScreen
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    ></iframe>
  </div>
);

export default LoomVideo;
