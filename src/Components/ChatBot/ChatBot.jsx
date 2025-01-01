import React, { useState, useEffect ,useRef} from 'react'
import PropTypes from 'prop-types'
import './ChatBot.css'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data'
const ChatBot = ({chats,setChats,activeChat,setActiveChat,onNewChat}) => {
    const [inputValue,setInputValue]=useState('')
    const [messages,setMessages]=useState(() => {
        const activeChatObj = chats.find(chat => chat.id === activeChat);
        return activeChatObj ? activeChatObj.messages : [];
    });
    const [isTyping, setIsTyping] = useState(false)
    const [showEmojiPicker,setShowEmojiPicker]=useState(false)
    const [isMenuOpen,setIsMenuOpen]=useState(false)
    const [typingDots, setTypingDots] = useState('');

    const chatEndRef=useRef(null)


    useEffect(()=>{
       const activeChatObj=chats.find((chat)=>chat.id===activeChat)
       setMessages(activeChatObj?activeChatObj.messages: [])
    },[activeChat,chats])

    const handleEmojiClick = (emojiData) => {
        console.log('Function triggered!')
        console.log('Emoji Data:', emojiData)
        if (emojiData.unified) {
            const emoji = String.fromCodePoint(...emojiData.unified.split('-').map(u => parseInt(u, 16)))
            setInputValue(prev => prev + emoji)
        } else if (emojiData.native) {
            setInputValue(prev => prev + emojiData.native)
        }
    }
    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }

    

    const sendMessage = async () => {
        if (inputValue.trim() === '') return;

        const newMessage = {
            type: 'prompt',
            text: inputValue,
            timestamp: new Date().toLocaleTimeString()
        };

        try {
            let currentMessages = [...messages];
            let chatId = activeChat;

            // Create new chat if none exists
            if (!activeChat) {
                const newChat = await onNewChat();
                if (!newChat) return;
                chatId = newChat.id;
                currentMessages = [newMessage];
                
                // Add new chat and set it active
                setActiveChat(chatId);
                setMessages(currentMessages);
                setChats(prevChats => [
                    { ...newChat, messages: currentMessages },
                    ...prevChats
                ]);
            } else {
                // Add message to existing chat
                currentMessages = [...messages, newMessage];
                setMessages(currentMessages);
                setChats(prevChats => 
                    prevChats.map(chat => 
                        chat.id === activeChat
                            ? { ...chat, messages: currentMessages }
                            : chat
                    )
                );
            }

            setInputValue('');
            setIsTyping(true);
            setTypingDots('.');
            const typingInterval = setInterval(() => {
                setTypingDots(prev => prev.length < 3 ? prev + '.' : '');
            }, 500);

            // Send query to backend
            const response = await fetch('http://localhost:8000/query', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: newMessage.text
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // Add AI response
            const aiResponse = {
                type: 'response',
                text: data.answer || 'No response',
                timestamp: new Date().toLocaleTimeString()
            };

            // Update messages and chats with AI response
            const finalMessages = [...currentMessages, aiResponse];
            
            // Update both states atomically
            setMessages(finalMessages);
            
            // Update chat history
            setChats(prevChats => {
                const updatedChats = prevChats.map(chat => 
                    chat.id === chatId
                        ? { ...chat, messages: finalMessages }
                        : chat
                );
                localStorage.setItem('chats', JSON.stringify(updatedChats));
                return updatedChats;
            });

            clearInterval(typingInterval);
            setTypingDots('');

        } catch (error) {
            console.error('Error:', error);
            const errorResponse = {
                type: 'response',
                text: 'Sorry, there was an error processing your request.',
                timestamp: new Date().toLocaleTimeString()
            };
            const errorMessages = [...messages, newMessage, errorResponse];
            setMessages(errorMessages);
            
            setChats(prevChats => {
                const updatedChats = prevChats.map(chat => 
                    chat.id === activeChat
                        ? { ...chat, messages: errorMessages }
                        : chat
                );
                localStorage.setItem('chats', JSON.stringify(updatedChats));
                return updatedChats;
            });

            clearInterval(typingInterval);
            setTypingDots('');
        } finally {
            setIsTyping(false);
        }
    };

    const handleKeyDown=(e)=>{
        if (e.key==='Enter'){
            e.preventDefault()
            sendMessage()
        }
    }

    const handleSelectChat=(id)=>{
        setActiveChat(id)
    }

    const handleDeleteChat=(id)=>{
        const updatedChats=chats.filter((chat)=>chat.id!==id)
        setChats(updatedChats)
        localStorage.setItem('chats',JSON.stringify(updatedChats))
        localStorage.removeItem(id)
        if (id===activeChat){
            const newActiveChat=updatedChats.length>0?
            updatedChats[0].id:null
            setActiveChat(newActiveChat)
        }
    }

    useEffect(()=>{
        chatEndRef.current?.scrollIntoView({behavior:'smooth'})
    },[messages])

    const handleNewChatClick = async () => {
        const newChat = await onNewChat();
        if (newChat) {
            setActiveChat(newChat.id);
            setMessages([]);
            setChats(prevChats => [
                { ...newChat, messages: [] },
                ...prevChats
            ]);
        }
    };

  return (
    <div className= "chat-app">
        <div className={`chat-list ${isMenuOpen?'open':''}`}>
            <div className="chat-list-header">
                <h2>Chat List</h2>
                <i className="bx bx-edit-alt new-chat" onClick={handleNewChatClick}></i>
                <i className="bx bx-x-circle close-list" onClick={()=>setIsMenuOpen(false)}></i>
            </div>
            {chats.map((chat)=>(
                <div key={chat.id} className={`chat-list-item ${chat.id===activeChat?'active':''}`}
                onClick={()=>handleSelectChat(chat.id)}>
                <h4>{chat.displayId}</h4>
                <i className="bx bx-x-circle" 
                onClick={(e)=>{
                e.stopPropagation(),handleDeleteChat(chat.id)}}></i>
                </div>
            ))}

        </div>
        <div className="chat-window">
            <div className="chat-title">
                <h3>Chat with Course Advisor</h3>
                
                <i className="bx bx-menu" onClick={()=>setIsMenuOpen(true)}></i>
            </div>
            <div className="chat">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.type === "prompt" ? "prompt" : "response"}>
                        {msg.type === "response" ? (
                            <>
                                {/* Split the message into lines */}
                                {msg.text.split('\n').map((line, idx) => {
                                    // Check if the line starts with "•"
                                    if (line.startsWith('•')) {
                                        return (
                                            <ul key={idx}>
                                                <li>{line.replace('•', '').trim()}</li> {/* Remove bullet and trim whitespace */}
                                            </ul>
                                        );
                                    } else {
                                        return <p key={idx}>{line}</p>; // Render other lines as paragraphs
                                    }
                                })}
                            </>
                        ) : (
                            <span>{msg.text}</span> // Render prompt messages as plain text
                        )}
                        <span>{msg.timestamp}</span>
                    </div>
                ))}

                {isTyping && <div className="typing">Typing{typingDots}</div>}
                <div ref={chatEndRef}></div>
            </div>
            <form className='msg-form' onSubmit={(e)=>e.preventDefault()}>
                <i className="fa-solid fa-face-smile emoji" onClick={()=>setShowEmojiPicker((prev)=>!prev)}></i>
                {showEmojiPicker && (
                    <div className='picker'>
                        <Picker 
                            data={data} 
                            onEmojiSelect={handleEmojiClick}
                            theme="dark"
                        />
                    </div>
                )}
                <textarea type="text" className='msg-input' 
                placeholder='Type a message..' value={inputValue}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                onFocus={()=>setShowEmojiPicker(false)}/>
                <i className="fa-solid fa-paper-plane"  onClick={sendMessage}></i>
            </form>
        </div>
    </div>
  )
}

ChatBot.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            timestamp: PropTypes.string.isRequired
        }))
    })).isRequired,
    setChats: PropTypes.func.isRequired,
    activeChat: PropTypes.string,
    setActiveChat: PropTypes.func.isRequired,
    onNewChat: PropTypes.func.isRequired
}

export default ChatBot