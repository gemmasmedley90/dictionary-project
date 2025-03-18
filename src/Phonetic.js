import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <strong>Phonetics:</strong>
      <br />
      <a href={props.phonetic.audio} target="_blank" without rel="noreferrer">
        Listen
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
