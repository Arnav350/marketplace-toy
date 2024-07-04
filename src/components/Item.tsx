import { Link } from "react-router-dom";

type Props = {
  title: string;
  image: number;
  price: number;
  category: string;
};

function Item({ title, image, price, category }: Props) {
  return (
    <Link
      to="/sale"
      style={{
        backgroundColor: "#ddd",
        minWidth: "calc(50% - 8px)",
        maxWidth: "calc(50% - 8px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        padding: 8,
        borderRadius: 8,
      }}
    >
      <h3 style={{ fontWeight: "400" }}>{title}</h3>
      <img src={`https://picsum.photos/${image}`} style={{ width: "100%" }} />
      <div style={{ display: "flex", gap: 16 }}>
        <h4 style={{ fontWeight: "400" }}>${price}</h4>
        <h4 style={{ fontWeight: "400" }}>{category}</h4>
      </div>
      <Link to="/chat">
        <button style={{ backgroundColor: "#69afdc", padding: 8, color: "white", borderRadius: 8 }}>
          Contact Seller
        </button>
      </Link>
    </Link>
  );
}

export default Item;
