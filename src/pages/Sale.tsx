import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Item from "../components/Item";

const items = [
  {
    title: "GE Minifridge",
    image: 247,
    price: 80,
    category: "Electronics",
  },
  {
    title: "Sofa",
    image: 246,
    price: 260,
    category: "Furniture",
  },
  {
    title: "LED Desk Lamp",
    image: 245,
    price: 28,
    category: "Room decor",
  },
];

function Sale() {
  return (
    <div style={{ overflowX: "scroll", height: "calc(100% - 64px)" }}>
      <Link to="/marketplace">
        <FaChevronLeft style={{ marginTop: 24, marginLeft: 16, marginBottom: 16, fontSize: 24 }} />
      </Link>
      <div style={{ margin: 16, display: "flex", overflowX: "scroll", gap: 16 }}>
        <img src="https://picsum.photos/244" style={{ width: "70%" }} />
        <img src="https://picsum.photos/243" style={{ width: "70%" }} />
        <img src="https://picsum.photos/242" style={{ width: "70%" }} />
      </div>
      <h2 style={{ fontSize: 36, marginLeft: 16, fontWeight: "400" }}>HP Laptop</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 24, padding: 16 }}>
        <p>Price: $400</p>
        <p>Category: Electronics</p>
        <p>Condition: Like new</p>
      </div>
      <p style={{ marginLeft: 16, marginRight: 16 }}>
        This is the description, lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, laboriosam
      </p>
      <div style={{ display: "flex", flexDirection: "column", padding: 16, gap: 8 }}>
        <Link
          to="/chat"
          style={{
            backgroundColor: "#ddd",
            padding: 16,
            borderRadius: 8,
            marginLeft: 16,
            marginRight: 16,
            fontSize: 16,
            textAlign: "center",
            color: "black",
          }}
        >
          Contact Seller
        </Link>
        <Link
          to="/chat"
          style={{
            backgroundColor: "#69afdc",
            color: "white",
            padding: 16,
            borderRadius: 8,
            marginLeft: 16,
            marginRight: 16,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Make Offer
        </Link>
      </div>
      <p style={{ marginLeft: 16, fontSize: 14 }}>About the seller</p>
      <div style={{ display: "flex", alignItems: "center", padding: 16, gap: 16, marginLeft: 16 }}>
        <img src="https://picsum.photos/241" style={{ height: 64, width: 64, borderRadius: 32 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Arnav Patel</p>
          <p>@arnavpatel</p>
        </div>
      </div>
      <p style={{ marginLeft: 16, fontSize: 14 }}>Similar items</p>
      <div style={{ display: "flex", gap: 16, margin: 16, overflowX: "scroll" }}>
        {items.map(({ title, image, price, category }, i) => (
          <Item key={i} title={title} image={image} price={price} category={category} />
        ))}
      </div>
    </div>
  );
}

export default Sale;
