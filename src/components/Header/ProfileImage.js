import React from "react";

function ProfileImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="home__blob"
      viewBox="0 0 200 187"
      style={{ fill: "white" }}
    >
      <mask id="mask0">
        <path d="M190.312 36.488c16.27 25.63 10.997 66.338-7.984 97.698-18.982 31.361-51.521 53.373-82.102 52.167-30.58-1.056-59.203-25.33-78.486-56.991C2.458 97.852-7.485 59.103 6.676 34.528 20.987 10.103 59.703-.15 97.966.002c38.264.301 76.227 10.855 92.346 36.486z"></path>
      </mask>
      <g mask="url(#mask0)">
        <path d="M190.312 36.488c16.27 25.63 10.997 66.338-7.984 97.698-18.982 31.361-51.521 53.373-82.102 52.167-30.58-1.056-59.203-25.33-78.486-56.991C2.458 97.852-7.485 59.103 6.676 34.528 20.987 10.103 59.703-.15 97.966.002c38.264.301 76.227 10.855 92.346 36.486z"></path>
        <image
          x="-20"
          className="home__blob-img"
          xlinkHref="images/profileImage.jpeg"
          style={{ width: 221, fill: "white" }}
        ></image>
      </g>
    </svg>
  );
}

export default ProfileImage;
