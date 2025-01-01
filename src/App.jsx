import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignInForm from './Components/SignInForm/SignInForm';
import SignUpForm from './Components/SignUpForm/SignUpForm';
import ChatBot from './Components/ChatBot/ChatBot';
import AvatarSelector from './Components/AvatarSelector/AvatarSelector';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import UserProfile from './Components/UserProfile/UserProfile';
import { auth } from './Components/firebaseauth/firebaseConfig';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [selectedAvatar, setSelectedAvatar] = useState(() => {
    const savedAvatar = localStorage.getItem('avatar');
    return savedAvatar ? JSON.parse(savedAvatar) : null;
  });

  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem('chats');
    return savedChats ? JSON.parse(savedChats) : [];
  });

  const [activeChat, setActiveChat] = useState(() => {
    const savedActiveChat = localStorage.getItem('activeChat');
    return savedActiveChat || null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  useEffect(() => {
    if (selectedAvatar) {
      localStorage.setItem('avatar', JSON.stringify(selectedAvatar));
    }
  }, [selectedAvatar]);

  useEffect(() => {
    localStorage.setItem('chats', JSON.stringify(chats));
  }, [chats]);

  useEffect(() => {
    if (activeChat) {
      localStorage.setItem('activeChat', activeChat);
    }
  }, [activeChat]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleAvatarSelect = (avatar) => {
    setSelectedAvatar(avatar);
    localStorage.setItem('avatar', JSON.stringify(avatar));
    setUser(prev => ({
      ...prev,
      avatarUrl: avatar.url
    }));
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem('user');
      localStorage.removeItem('avatar');
      localStorage.removeItem('chats');
      localStorage.removeItem('activeChat');
      
      setUser(null);
      setSelectedAvatar(null);
      setChats([]);
      setActiveChat(null);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNewChat = () => {
    const newChat = {
        id: uuidv4(),
        displayId: `Chat ${new Date().toLocaleDateString('en-GB')} ${new Date().toLocaleTimeString()}`,
        messages: []
    };
    
    // Don't update state here, let ChatBot component handle it
    return newChat;
  };

  return (
    <Router>
      <div className="app">
        {user && selectedAvatar && (
          <UserProfile user={user} onSignOut={handleSignOut} />
        )}
        <div className="app-container">
          <Routes>
            <Route 
              path="/signup" 
              element={!user ? <SignUpForm onSignUp={handleLogin} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/forgot-password" 
              element={!user ? <ForgotPassword /> : <Navigate to="/" />} 
            />
            <Route 
              path="/select-avatar" 
              element={
                user && !selectedAvatar ? (
                  <AvatarSelector onAvatarSelect={handleAvatarSelect} />
                ) : (
                  <Navigate to="/" />
                )
              } 
            />
            <Route 
              path="/login" 
              element={!user ? <SignInForm onLogin={handleLogin} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/" 
              element={
                !user ? (
                  <Navigate to="/login" />
                ) : !selectedAvatar ? (
                  <Navigate to="/select-avatar" />
                ) : (
                  <ChatBot 
                    user={user}
                    avatar={selectedAvatar}
                    chats={chats}
                    setChats={setChats}
                    activeChat={activeChat}
                    setActiveChat={setActiveChat}
                    onNewChat={handleNewChat}
                  />
                )
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;