import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import {ChannelContainer, ChannelListContainer} from './components';
import './App.css';

const cookies = new Cookies();
const apiKey = 'qgtk9ttyha7j';
const authToken = cookies.get("token");
const client = StreamChat.getInstance(apiKey);

function App() {
    return (
        <div className="app__wrapper">
            <Chat client={client} theme="team light">
                <ChannelListContainer/>
                <ChannelContainer/>
            </Chat>
        </div>
    )
}

export default App
