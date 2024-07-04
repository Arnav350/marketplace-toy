import { Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

function Register({ setLoggedIn }: Props) {
  const navigate = useNavigate();
  function handleClick() {
    setLoggedIn(true);
    navigate("/home");
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ color: "#69afdc" }}>Create an account</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <input
          placeholder="email"
          type="email"
          style={{ fontSize: 16, padding: 16, border: "1px solid #242a2d", borderRadius: 8, outlineColor: "#99a8c5" }}
        />
        <input
          placeholder="full name"
          type="text"
          style={{ fontSize: 16, padding: 16, border: "1px solid #242a2d", borderRadius: 8, outlineColor: "#99a8c5" }}
        />
        <input
          placeholder="password"
          type="password"
          style={{ fontSize: 16, padding: 16, border: "1px solid #242a2d", borderRadius: 8, outlineColor: "#99a8c5" }}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <button
          style={{ backgroundColor: "#69afdc", padding: 16, borderRadius: 8, color: "white", fontSize: 16 }}
          onClick={handleClick}
        >
          Register
        </button>
        <Link to="/">
          <p style={{ color: "#242a2d" }}>Already have an account? Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Register;
