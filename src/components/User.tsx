import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  date: string;
  message: string;
  photo: number;
};

function User({ name, date, message, photo }: Props) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        margin: 12,
        padding: 12,
        display: "flex",
        alignItems: "center",
        gap: 16,
        borderBottom: "1px solid #242a2d",
      }}
      onClick={() => navigate("/chat")}
    >
      <img
        src={`https://picsum.photos/${photo}`}
        style={{ height: 64, width: 64, borderRadius: 32, backgroundColor: "#69afdc" }}
      />
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h4 style={{ fontSize: 18 }}>{name}</h4>
          <p style={{ color: "#242a2d" }}>{date}</p>
        </div>
        <p style={{ color: "#242a2d" }}>{message}</p>
      </div>
    </div>
  );
}

export default User;
