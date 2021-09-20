import React, { useState } from "react";
import "./styles.css";

const emojiDictonary = {
  "😊": "Smiling",
  "🥰": "In love face",
  "❤️": "Love Heart",
  "😉": "Winking",
  "😛": "Cheeeky",
  "😘": "Kissing",
  "🤣": "Rolling on the Floor Laughing Face",
  "😠": "Angry",
  "😟": "Sad"
};

var emojisWeKnow = Object.keys(emojiDictonary);

export default function App() {
  var [meaning, setemojiMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictonary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our Database";
    }
    setemojiMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setemojiMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Welcome</h1>
      <input onChange={emojiInputHandler} />
      <h2> {meaning} </h2>

      <h3>Emoji we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
