import { useState, useEffect } from 'react';
import './AvatarSelector.css';

// Function to shuffle array using Fisher-Yates algorithm
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const AvatarSelector = ({ onAvatarSelect }) => {
  const [selectedAvatar, setSelectedAvatar] = useState(() => {
    const savedAvatar = localStorage.getItem('avatar');
    return savedAvatar ? JSON.parse(savedAvatar) : null;
  });
  const [avatarOptions, setAvatarOptions] = useState([]);

  useEffect(() => {
    
    const allAvatars = Array.from({ length: 11 }, (_, i) => ({
      id: i + 1,
      url: `../src/assets/avatar${i + 1}.svg`,
      alt: `Avatar ${i + 1}`
    }));

    // Shuffle and take first 4
    const randomAvatars = shuffleArray([...allAvatars]).slice(0, 4);
    setAvatarOptions(randomAvatars);
  }, []); 

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleSubmit = () => {
    if (selectedAvatar) {
      onAvatarSelect(selectedAvatar);
    }
  };

  return (
    <div className="avatar-selector-container">
      <div className="avatar-selector-content">
        <h2>Choose Your Avatar</h2>
        <p>Select an avatar to represent you in Course Advisor</p>
        <div className="avatar-grid">
          {avatarOptions.map((avatar) => (
            <div
              key={avatar.id}
              className={`avatar-option ${selectedAvatar?.id === avatar.id ? 'selected' : ''}`}
              onClick={() => handleAvatarSelect(avatar)}
            >
              <img src={avatar.url} alt={avatar.alt} />
            </div>
          ))}
        </div>
        <button
          className="confirm-avatar-btn"
          onClick={handleSubmit}
          disabled={!selectedAvatar}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AvatarSelector;