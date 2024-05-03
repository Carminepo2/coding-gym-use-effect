import React from "react";
import { Container } from "../components/Container";
import { TextInput } from "../components/TextInput";
import { Button } from "../components/Button";

export function ExternalSystemExample2() {
  const [selectedChatRoom, setSelectedChatRoom] =
    React.useState<string>("general");

  return (
    <Container title="Esempio external system" nextLink="/example/3">
      <select
        className="mb-4"
        value={selectedChatRoom}
        onChange={(e) => setSelectedChatRoom(e.target.value)}
      >
        <option value="general">General</option>
        <option value="random">Random</option>
        <option value="fun">Fun</option>
      </select>
      <ChatRoom key={selectedChatRoom} chatRoomName={selectedChatRoom} />
    </Container>
  );
}

function ChatRoom({ chatRoomName }: { chatRoomName: string }) {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [message, setMessage] = React.useState<string>("");

  const messageContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const chatRoom = new ChatRoomApi(chatRoomName);
    const disconnect = chatRoom.connect((newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
    return () => disconnect();
  }, [chatRoomName]);

  React.useEffect(() => {
    // scroll to the bottom of the message container
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <div
        ref={messageContainerRef}
        className="h-60 w-96 overflow-y-scroll border border-slate-100 rounded-lg p-2"
      >
        <ul className="space-y-2">
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
      <form
        className="mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          setMessages((prevMessages) => [...prevMessages, message]);
          setMessage("");
        }}
      >
        <div className="flex space-x-2">
          <TextInput
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </>
  );
}

class ChatRoomApi {
  private listeners = new Set<(newMessage: string) => void>();

  constructor(private chatRoom: string) {
    this.emitRandomMessages();
  }

  connect(callback: (newMessage: string) => void) {
    this.listeners.add(callback);
    console.log(`connected to chat room: ${this.chatRoom}`);

    return () => {
      this.listeners.delete(callback);
      console.log(`disconnected from chat room: ${this.chatRoom}`);
    };
  }

  private emitRandomMessages() {
    const messages = [
      "Ciao!",
      "Come state?",
      "Bene, grazie",
      "Viva SEND e Interop!",
      "Scusate sono nuovo, qualcuno mi aiuta con il Timesheet?",
      "Qualcuno ha visto il mio cellulare?",
      "Ho dimenticato un caricabatterie in un ufficio, a qualcuno risulta?",
      "Posso sincronizzare gli state con useEffect?",
      "brb",
      "Qualcuno sa come si fa il deploy?",
      "I'm a bot. Beep boop.",
      "Sono incasinato, qualcuno mi aiuta?",
      "Prossimo argomento della Coding Gym?",
      "Non funziona selfcare di dev, qualcuno ha un token?",
      "Prendo permesso, a presto!",
      "Quale saranno le ripercussioni una volta ultimata la cessione a Poste e IPZS?",
    ];
    const message = messages[Math.floor(Math.random() * messages.length)];
    for (const listener of this.listeners) {
      listener(message);
    }
    setTimeout(() => {
      this.emitRandomMessages();
    }, Math.random() * 5000);
  }
}
