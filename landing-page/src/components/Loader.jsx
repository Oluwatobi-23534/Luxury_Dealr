import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen md:h-auto">
      <svg
        className="w-24 h-24 md:w-8 md:h-8"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>
          {`.spinner_ajPY{transform-origin:center;animation:spinner_AtaB .75s infinite linear}`}
          {`@keyframes spinner_AtaB{100%{transform: rotate(360deg)}}`}
        </style>
        <path
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".25"
          fill="#007bff" // blue color
        />
        <path
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          className="spinner_ajPY"
          fill="#007bff" // blue color
        />
      </svg>
    </div>
  );

}
