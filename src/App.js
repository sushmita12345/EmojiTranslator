import React, { useState } from "react";
import style from "./styles.css";





const emojiDictonary = {
  "😊": "Smiling",
  "🥰": "In love face",
  "❤️": "Love Heart",
  "😉": "Winking",
  "😛": "Cheeeky",
  "😘": "Kissing",
  "🤣": "Rolling on the Floor Laughing Face",
  "😠": "Angry",
  "😟": "Sad",
  "🎂": "Birthday Cake",
  "🍫": "Chocolate bar",
  "🍨": "Ice-Cream",
  "🍔": "Hamburger",
  "🍕": "Pizza",
  "🌹": "Rose",
  "🐻": "Bear"
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
     
      
    
      <h1 className="header">Emoji Translator</h1>
      
    
      <input className="text-area" onChange={emojiInputHandler} />
      <h2 className=""> {meaning} </h2>

      <h3 className="link">Emoji we know</h3>
      <div className="Card">
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
      <footer class="footer">
      <div class="main">
        <div class="footer-header">SocialMedia</div>
        <ul class="social-links list-non-bullet">
          <li class="list-item-inline">
            <a class="footer_link" href="https://github.com/Sushmita12345">Github</a>
          </li>
          <li class="list-item-inline">
            <a class="footer_link" href="https://twitter.com/">Twitter</a>
          </li>
          <li class="list-item-inline">
            <a class="footer_link" href="https://Linkedin.com/in/sushmita-gupta-636929195/">Linkedin</a>
            
          </li>
        </ul>
      </div>

    </footer>
      
    </div>
    
    
  );
}
