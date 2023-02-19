import "./Navbar.css";
import logo from "../../images/S-logo-hex.svg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="navbar__logo"></img>
    </div>
  );
};
