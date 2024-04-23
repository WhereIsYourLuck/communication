interface Message {
  id: number;
  content: string;
  sentBy: number;
  sentAt: Date;
  seenAt?: Date;
}

export default Message;
