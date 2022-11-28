import { ReactNode } from 'react';
import { MessageType } from '../types/enums/MessageType';
import './Message.scss';

interface IMessageProps {
  children: ReactNode;
  messageType?: MessageType;
}

export const Message = ({
  children,
  messageType = MessageType.INFO,
}: IMessageProps) => {
  return (
    <div
      className={`message ${
        messageType === MessageType.ERROR && 'message--error'
      }`}
    >
      {children}
    </div>
  );
};
