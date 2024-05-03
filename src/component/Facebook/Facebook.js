import React from "react";
import FbImageLibrary from "react-fb-image-grid";

function Facebook({ images}) {
  return (
    <div style={{ width: "100vw", height: "340px" }}>
      <div className="images" style={{ width: "32%" }}>
        <FbImageLibrary images={images} />
      </div>
    </div>
  );
}

export default Facebook;