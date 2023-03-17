import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import LOGO from "../../assets/LOGOS-STORIA.png";
import "./navbar.css";

const Menu = () => (
  <>
    <Link to={"/"} className="links__styles">
      <p>Home</p>
    </Link>
    <a
      href="https://app.menupp.co/restaurant/piazzaitaliacalle93"
      target="_blank"
      className="links__styles"
    >
      <p>Menu</p>
    </a>
    <Link to={"/reservation"} className="links__styles">
      <p>Reservación</p>
    </Link>
    <Link to={"/"} className="links__styles">
      <p>Contacto</p>
    </Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="hda__navbar">
      <div className="hda__navbar-links">
        <div className="hda__navbar-links_logo">
          <img src={LOGO} alt="LOGO" />
        </div>
        <div className="hda__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="hda__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="equis"
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="hda__navbar-menu_container scale up-center">
            <div className="hda__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
