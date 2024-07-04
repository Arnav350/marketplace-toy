import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

function Add() {
  return (
    <div style={{ overflowX: "scroll", height: "calc(100% - 64px)" }}>
      <div style={{ fontSize: 36, padding: 16, fontWeight: "400" }}>List an item</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="Item name"
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
        <div style={{ display: "flex", marginLeft: 16, marginRight: 16, gap: 16 }}>
          <input
            type="text"
            placeholder="Price"
            style={{
              marginTop: 16,
              fontSize: 20,
              padding: 12,
              border: "1px solid #242a2d",
              borderRadius: 8,
              outlineColor: "#99a8c5",
              maxWidth: "calc(33.33% - 10.3px)",
            }}
          />
          <input
            type="text"
            placeholder="Category"
            style={{
              marginTop: 16,
              fontSize: 20,
              padding: 12,
              border: "1px solid #242a2d",
              borderRadius: 8,
              outlineColor: "#99a8c5",
              maxWidth: "calc(33.33% - 10.3px)",
            }}
          />
          <input
            type="text"
            placeholder="Condition"
            style={{
              marginTop: 16,
              fontSize: 20,
              padding: 12,
              border: "1px solid #242a2d",
              borderRadius: 8,
              outlineColor: "#99a8c5",
              maxWidth: "calc(33.33% - 10.3px)",
            }}
          />
        </div>
        <textarea
          placeholder="Description"
          style={{
            marginTop: 16,
            marginRight: 16,
            marginLeft: 16,
            fontSize: 20,
            padding: 12,
            border: "1px solid #242a2d",
            borderRadius: 8,
            outlineColor: "#99a8c5",
            resize: "vertical",
            maxHeight: 200,
          }}
        ></textarea>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 16,
            marginRight: 16,
            marginLeft: 16,
            fontSize: 20,
            padding: 12,
            border: "1px solid #242a2d",
            borderRadius: 8,
            outlineColor: "#99a8c5",
            height: 120,
          }}
        >
          <FaPlus />
          <h4 style={{ fontWeight: "400" }}>Add Images</h4>
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

export default Add;
