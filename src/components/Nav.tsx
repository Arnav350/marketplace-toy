import { useState } from "react";
import { Link } from "react-router-dom";
import { FaCommentAlt, FaUser, FaHome, FaShoppingCart, FaPlusCircle } from "react-icons/fa";

function Nav() {
  const [page, setPage] = useState<string>("home");

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        paddingTop: 16,
        paddingBottom: 16,
      }}
    >
      <Link to="/home" onClick={() => setPage("home")}>
        <FaHome style={{ fontSize: 28, color: page == "home" ? "#69afdc" : "#242a2d" }} />
      </Link>
      <Link to="/marketplace" onClick={() => setPage("marketplace")}>
        <FaShoppingCart style={{ fontSize: 28, color: page == "marketplace" ? "#69afdc" : "#242a2d" }} />
      </Link>
      <Link to="/add" onClick={() => setPage("add")}>
        <FaPlusCircle style={{ fontSize: 28, color: page == "add" ? "#69afdc" : "#242a2d" }} />
      </Link>
      <Link to="/messages" onClick={() => setPage("messages")}>
        <FaCommentAlt style={{ fontSize: 28, color: page == "messages" ? "#69afdc" : "#242a2d" }} />
      </Link>
      <Link to="/profile" onClick={() => setPage("profile")}>
        <FaUser style={{ fontSize: 28, color: page == "profile" ? "#69afdc" : "#242a2d" }} />
      </Link>
    </div>
  );
}

export default Nav;
