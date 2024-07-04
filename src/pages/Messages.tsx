import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import User from "../components/User";

const users = [
  {
    name: "Arnav",
    date: "8:51 AM",
    message: "I'm still waiting for other offers",
    photo: 255,
  },
  {
    name: "James",
    date: "Yesterday",
    message: "How about $45?",
    photo: 254,
  },
  {
    name: "Olivia",
    date: "Wednesday",
    message: "Sorry I dont think I can go that low.",
    photo: 253,
  },
];

function Messages() {
  const [input, setInput] = useState<string>("");

  return (
    <div style={{ overflowX: "scroll", height: "calc(100% - 64px)" }}>
      <h2 style={{ fontSize: 36, padding: 16, fontWeight: "400" }}>Messages</h2>
      <div
        style={{
          border: "2px solid #242a2d",
          display: "flex",
          marginLeft: 16,
          marginRight: 16,
          padding: 12,
          borderRadius: 16,
          gap: 8,
        }}
      >
        <FaMagnifyingGlass style={{ fontSize: 24 }} />
        <input
          value={input}
          type="text"
          placeholder="Search..."
          style={{ outline: "none", fontSize: 20, flex: 1, border: "none" }}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        {users
          .filter(({ name }) => name.toLowerCase().includes(input.toLowerCase()))
          .map(({ name, date, message, photo }, i) => (
            <User key={i} name={name} date={date} message={message} photo={photo} />
          ))}
      </div>
    </div>
  );
}

export default Messages;
