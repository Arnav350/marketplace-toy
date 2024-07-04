import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Item from "../components/Item";

const items = [
  {
    title: "GE Minifridge",
    image: 252,
    price: 80,
    category: "Electronics",
  },
  {
    title: "Sofa",
    image: 251,
    price: 260,
    category: "Furniture",
  },
  {
    title: "LED Desk Lamp",
    image: 250,
    price: 28,
    category: "Room decor",
  },
  {
    title: "HP Laptop",
    image: 249,
    price: 400,
    category: "Electronics",
  },
  {
    title: "Mattress Topper",
    image: 248,
    price: 45,
    category: "Furniture",
  },
];

function Marketplace() {
  const [input, setInput] = useState<string>("");

  return (
    <div style={{ overflowX: "scroll", height: "calc(100% - 64px)" }}>
      <h2 style={{ fontSize: 36, padding: 16, fontWeight: "400" }}>Marketplace</h2>
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
          placeholder="Search for an item"
          style={{ outline: "none", fontSize: 20, flex: 1, border: "none" }}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", padding: 8, marginRight: 24, gap: 2 }}>
        <FaFilter />
        <p>Filters</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, margin: 16 }}>
        {items
          .filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))
          .map(({ title, image, price, category }, i) => (
            <Item key={i} title={title} image={image} price={price} category={category} />
          ))}
      </div>
    </div>
  );
}

export default Marketplace;
