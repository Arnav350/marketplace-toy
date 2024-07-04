import { Dispatch, SetStateAction } from "react";
import { FaCreditCard, FaRegBookmark, FaTruck } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

type Props = {
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

function Profile({ setLoggedIn }: Props) {
  const navigate = useNavigate();
  function handleClick() {
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <div style={{ overflowX: "scroll", height: "calc(100% - 64px)" }}>
      <h4 style={{ fontSize: 24, fontWeight: "400", padding: 16, textAlign: "center" }}>@arnavpatel</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 32,
        }}
      >
        <img
          src="https://picsum.photos/256"
          style={{ height: 128, width: 128, borderRadius: 64, backgroundColor: "#69afdc", marginBottom: 16 }}
        />
        <h1 style={{ fontWeight: "400" }}>Arnav Patel</h1>
        <p style={{ color: "#242a2d" }}>patelarnavm@gmail.com</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: 16 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 100 }}>
          <p style={{ textAlign: "center" }}>Items sold</p>
          <h4 style={{ fontSize: 28, fontWeight: "400" }}>4</h4>
        </div>
        <div style={{ height: 24, width: 2, backgroundColor: "#242a2d" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 100 }}>
          <p style={{ textAlign: "center" }}>For sale</p>
          <h4 style={{ fontSize: 28, fontWeight: "400" }}>2</h4>
        </div>
        <div style={{ height: 24, width: 2, backgroundColor: "#242a2d" }} />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 100 }}>
          <p style={{ textAlign: "center" }}>Buy requests</p>
          <h4 style={{ fontSize: 28, fontWeight: "400" }}>1</h4>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 16, padding: 16, gap: 16 }}>
          <FaRegBookmark style={{ fontSize: 28 }} />
          <h4 style={{ fontSize: 24, fontWeight: "400" }}>Saved</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 16, padding: 16, gap: 16 }}>
          <FaCreditCard style={{ fontSize: 28 }} />
          <h4 style={{ fontSize: 24, fontWeight: "400" }}>Payment</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 16, padding: 16, gap: 16 }}>
          <FaTruck style={{ fontSize: 28 }} />
          <h4 style={{ fontSize: 24, fontWeight: "400" }}>Delivery</h4>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginLeft: 16, padding: 16, gap: 16 }}>
          <FaGear style={{ fontSize: 28 }} />
          <h4 style={{ fontSize: 24, fontWeight: "400" }}>Settings</h4>
        </div>
      </div>
      <button
        style={{
          backgroundColor: "#69afdc",
          color: "white",
          marginTop: 16,
          marginLeft: 16,
          padding: 16,
          fontSize: 24,
          borderRadius: 8,
          width: "calc(100% - 32px)",
        }}
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
