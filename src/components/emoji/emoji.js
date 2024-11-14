// src/WellbeingCheckIn.js
import React, { useState } from 'react';
import './emoji.css'; // For styles

const emojiList = [
  { label: 'Terrible', emoji: '😞' },
  { label: 'Bad', emoji: '😔' },
  { label: 'Alright', emoji: '😐' },
  { label: 'Pretty Good', emoji: '😊' },
  { label: 'Fantastic', emoji: '😄' },
];

function Emoji() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  return (
    <div className="wellbeing-widget">
      <h2>Wellbeing Check-in</h2>
      <p>Hello! How are you feeling today?</p>
      <div className="emoji-container">
        {emojiList.map((item, index) => (
          <button
            key={index}
            className={`emoji-button ${selectedEmoji === index ? 'selected' : ''}`}
            onClick={() => setSelectedEmoji(index)}
          >
            <span role="img" aria-label={item.label}>
              {item.emoji}
            </span>
            <p>{item.label}</p>
          </button>
        ))}
      </div>
      <button className="continue-button" disabled={selectedEmoji === null}>
        Continue
      </button>
    </div>
  );
}

export default Emoji;
