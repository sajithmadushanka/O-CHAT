// src/pages/index.tsx

"use client";

import Chat from './components/Chat';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Real-time Chat</h1>
      <Chat channelId="some-channel-id" />
    </div>
  );
};

export default HomePage;
