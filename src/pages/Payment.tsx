import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div style={{ overflowX: "scroll", height: "calc(100% - 64px)" }}>
      <Link to="/chat">
        <FaChevronLeft style={{ marginTop: 24, marginLeft: 16, marginBottom: 16, fontSize: 24 }} />
      </Link>
      <h1 style={{ fontSize: 36, marginLeft: 16, fontWeight: "400" }}>Payment</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{ marginRight: 16, marginLeft: 16, marginTop: 16, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <p style={{ marginLeft: 4 }}>Amount</p>
          <input
            type="text"
            placeholder="$00.00"
            style={{ fontSize: 20, padding: 12, border: "1px solid #242a2d", borderRadius: 8, outlineColor: "#99a8c5" }}
          />
        </div>
        <div
          style={{ marginRight: 16, marginLeft: 16, marginTop: 16, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <p style={{ marginLeft: 4 }}>Name on card</p>
          <input
            type="text"
            placeholder="Arnav Patel"
            style={{ fontSize: 20, padding: 12, border: "1px solid #242a2d", borderRadius: 8, outlineColor: "#99a8c5" }}
          />
        </div>
        <div
          style={{ marginRight: 16, marginLeft: 16, marginTop: 16, display: "flex", flexDirection: "column", gap: 2 }}
        >
          <p style={{ marginLeft: 4 }}>Card number</p>
          <input
            type="text"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            style={{ fontSize: 20, padding: 12, border: "1px solid #242a2d", borderRadius: 8, outlineColor: "#99a8c5" }}
          />
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              marginRight: 16,
              marginLeft: 16,
              marginTop: 16,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "calc(50% - 32px)",
            }}
          >
            <p style={{ marginLeft: 4 }}>Exp. date</p>
            <input
              type="text"
              placeholder="00/00"
              style={{
                fontSize: 20,
                padding: 12,
                border: "1px solid #242a2d",
                borderRadius: 8,
                outlineColor: "#99a8c5",
              }}
            />
          </div>
          <div
            style={{
              marginRight: 16,
              marginLeft: 16,
              marginTop: 16,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "calc(50% - 32px)",
            }}
          >
            <p style={{ marginLeft: 4 }}>Numbers on back</p>
            <input
              type="text"
              placeholder="000"
              style={{
                fontSize: 20,
                padding: 12,
                border: "1px solid #242a2d",
                borderRadius: 8,
                outlineColor: "#99a8c5",
              }}
            />
          </div>
        </div>
        <Link
          to="/delivery"
          style={{
            backgroundColor: "#69afdc",
            marginTop: 32,
            marginRight: 16,
            marginLeft: 16,
            padding: 16,
            fontSize: 20,
            color: "white",
            borderRadius: 8,
            textAlign: "center",
          }}
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

export default Payment;
