import { useState } from "react";
import { FaCamera, FaChevronLeft, FaDollarSign, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Message from "../components/Message";

const init = [
  {
    my: true,
    content: "Hey, how are you?",
  },
  {
    my: false,
    content: "I'm doing well",
  },
  {
    my: false,
    content: "Are you interested in the minifridge?",
  },
  {
    my: true,
    content: "Yea",
  },
];

function Chat() {
  const [messages, setMessages] = useState<{ my: boolean; content: string }[]>(init);
  const [input, setInput] = useState<string>("");

  function handleEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      setMessages((prev) => [...prev, { my: true, content: input }]);
      setInput("");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        marginBottom: 64,
        overflowX: "scroll",
        height: "calc(100% - 64px)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link to="/messages">
            <FaChevronLeft style={{ fontSize: 24 }} />
          </Link>
          <img
            src="https://picsum.photos/252"
            style={{ height: 48, width: 48, borderRadius: 24, backgroundColor: "#69afdc" }}
          />
          <div>
            <h4 style={{ fontSize: 18 }}>Arnav Patel</h4>
            <p>@arnavpatel</p>
          </div>
        </div>
        <Link to="/payment">
          <FaDollarSign style={{ fontSize: 28 }} />
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
        <div style={{ padding: 16 }}>
          {messages.map(({ my, content }, i) => (
            <Message key={i} my={my} content={content} />
          ))}
        </div>
        <div
          style={{
            border: "2px solid #242a2d",
            display: "flex",
            alignItems: "center",
            marginLeft: 16,
            marginRight: 16,
            padding: 12,
            borderRadius: 24,
            gap: 8,
          }}
        >
          <FaCamera style={{ fontSize: 24 }} />
          <input
            value={input}
            type="text"
            placeholder="Message..."
            style={{ flex: 1, fontSize: 20, outline: "none", border: "none" }}
            onChange={(event) => setInput(event.target.value)}
            onKeyUp={(event) => handleEnter(event)}
          />
          <FaPlus style={{ fontSize: 24 }} />
          <Link to="/payment">
            <FaDollarSign style={{ fontSize: 24 }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Chat;
