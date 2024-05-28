import Message from './message.model';

interface Discussion {
  id: number;
  user1: number;
  user2: number;
  lastMessage: Message;
  messagesNotSeen: number;
}

export default Discussion;
