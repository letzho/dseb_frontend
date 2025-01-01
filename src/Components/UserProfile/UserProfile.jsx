import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = ({ user, onSignOut }) => {
  return (
    <div className="user-profile">
      {user && user.avatarUrl && (
        <img src={user.avatarUrl} alt="User Avatar" className="user-avatar" />
      )}
      <span className="user-name">{user?.displayName}</span>
      <button className="sign-out-btn" onClick={onSignOut}>Sign Out</button>
    </div>
  );
};

export default UserProfile; 