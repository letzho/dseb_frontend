import { useState, useEffect } from 'react';
import './AvatarSelector.css';
import Avatar1 from '../../assets/avatar1.svg'; 
import Avatar2 from '../../assets/avatar2.svg';
import Avatar3 from '../../assets/avatar3.svg';
import Avatar4 from '../../assets/avatar4.svg';
import Avatar5 from '../../assets/avatar5.svg';
import Avatar6 from '../../assets/avatar6.svg';
import Avatar7 from '../../assets/avatar7.svg';
import Avatar8 from '../../assets/avatar8.svg';
import Avatar9 from '../../assets/avatar9.svg';
import Avatar10 from '../../assets/avatar10.svg';
import Avatar11 from '../../assets/avatar11.svg';

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
    
    const allAvatars = [
      { id: 1, url: Avatar1, alt: 'Avatar 1' },
      { id: 2, url: Avatar2, alt: 'Avatar 2' },
      { id: 3, url: Avatar3, alt: 'Avatar 3' }, 
      { id: 4, url: Avatar4, alt: 'Avatar 4' },
      { id: 5, url: Avatar5, alt: 'Avatar 5' },
      { id: 6, url: Avatar6, alt: 'Avatar 6' },
      { id: 7, url: Avatar7, alt: 'Avatar 7' },
      { id: 8, url: Avatar8, alt: 'Avatar 8' },
      { id: 9, url: Avatar9, alt: 'Avatar 9' },
      { id: 10, url: Avatar10, alt: 'Avatar 10' },
      { id: 11, url: Avatar11, alt: 'Avatar 11' },
    ];
 
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