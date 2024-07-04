import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Delivery() {
  const [selected, setSelected] = useState<number>(3);

  return (
    <div style={{ overflowX: "scroll", height: "calc(100% - 64px)" }}>
      <Link to="/payment">
        <FaChevronLeft style={{ marginTop: 24, marginLeft: 16, marginBottom: 16, fontSize: 24 }} />
      </Link>
      <h1 style={{ fontSize: 36, marginLeft: 16, fontWeight: "400" }}>Delivery</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link
          to="/delivery"
          style={{
            backgroundColor: "#69afdc",
            margin: 16,
            padding: 16,
            fontSize: 20,
            color: "white",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          No delivery
        </Link>
        <input
          type="text"
          placeholder="Street Address"
          style={{
            marginTop: 16,
            marginRight: 16,
            marginLeft: 16,
            fontSize: 20,
            padding: 12,
            border: "1px solid #242a2d",
            borderRadius: 8,
            outlineColor: "#99a8c5",
          }}
        />
        <input
          type="text"
          placeholder="Po. box, room number, etc..."
          style={{
            marginTop: 16,
            marginRight: 16,
            marginLeft: 16,
            fontSize: 20,
            padding: 12,
            border: "1px solid #242a2d",
            borderRadius: 8,
            outlineColor: "#99a8c5",
          }}
        />
        <h4 style={{ marginLeft: 16, marginTop: 16, marginBottom: 4, fontSize: 18, fontWeight: "400" }}>
          Delivery dates
        </h4>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              backgroundColor: selected === 1 ? "#69afdc" : "white",
              border: selected === 1 ? "1px solid #69afdc" : "1px solid #242a2d",
              color: selected === 1 ? "white" : "#242a2d",
              padding: 16,
              fontSize: 20,
              borderRadius: 8,
            }}
            onClick={() => setSelected(1)}
          >
            1-2 days
          </div>
          <div
            style={{
              backgroundColor: selected === 2 ? "#69afdc" : "white",
              border: selected === 2 ? "1px solid #69afdc" : "1px solid #242a2d",
              color: selected === 2 ? "white" : "#242a2d",
              padding: 16,
              fontSize: 20,
              borderRadius: 8,
            }}
            onClick={() => setSelected(2)}
          >
            3-7 days
          </div>
          <div
            style={{
              backgroundColor: selected === 3 ? "#69afdc" : "white",
              border: selected === 3 ? "1px solid #69afdc" : "1px solid #242a2d",
              color: selected === 3 ? "white" : "#242a2d",
              padding: 16,
              fontSize: 20,
              borderRadius: 8,
            }}
            onClick={() => setSelected(3)}
          >
            7-14 days
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: 16, marginTop: 16 }}>
          <h4 style={{ fontSize: 24, fontWeight: "400" }}>Total price: </h4>
          <p style={{ fontSize: 24 }}>$45</p>
        </div>
        <Link
          to="/home"
          style={{
            backgroundColor: "#69afdc",
            margin: 16,
            padding: 16,
            fontSize: 20,
            color: "white",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          Confirm
        </Link>
      </div>
    </div>
  );
}

export default Delivery;
