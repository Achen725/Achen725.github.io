import React from "react";
import Typewriter from "typewriter-effect";

function Descriptor() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Casual Investor",
          "Chess Player",
          "Amateur Animator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Descriptor;