import { useEffect } from "react";
import logo from "./styles/logo 1.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Our Services", href: "#", current: false },
  { name: "Our Mission", href: "#", current: false },
  { name: "Our Vision", href: "#", current: false },
  { name: "Who are We ?", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  useEffect(() => {
    let isActive = false;
    function toggle() {
      if (isActive) {
        //disable active
        document.querySelector(".hamburger").className = "hamburger";
        document.querySelector(".shadow").className = "shadow";
        document.querySelector(".mobile-nav").className = "mobile-nav";
        isActive = false;
      } else {
        //activate
        document.querySelector(".hamburger").className = "hamburger active";
        document.querySelector(".shadow").className = "shadow active";
        document.querySelector(".mobile-nav").className = "mobile-nav active";
        isActive = true;
      }
    }
  }, []);
  return (
    <header>
      <a href="/" class="logo">
        <img src={logo} alt="" style={{ height: "80px", paddingTop: "30px" }} />
      </a>
      <nav class="center-nav">
        <Link to="/about">About Us</Link>
        <a href="/#services">Services</a>
        <Link to="/mission">Mission</Link>
        <Link to="/vision">Vision</Link>
      </nav>
      <nav class="right-nav">
        <a href="https://www.redwolf.in/isro-merchandise-india" target="_blank">
          Shop
        </a>
      </nav>
      <div class="shadow"></div>
      {/* <button class="hamburger" onclick="toggle()">
        <span></span>
        <span></span>
        <span></span>
      </button> */}
      <nav class="mobile-nav">
        <a href="https://www.isro.gov.in/PSLV_CON.html" target="_blank">
          PSLV
        </a>
        <a href="https://www.isro.gov.in/GSLV_CON.html" target="_blank">
          GSLV
        </a>
        <a href="https://www.isro.gov.in/GSLVmk3_CON.html" target="_blank">
          LVM-3
        </a>
        <a href="https://www.isro.gov.in/Gaganyaan.html" target="_blank">
          HRLV
        </a>
        <a href="https://www.isro.gov.in/RLVTD.html" target="_blank">
          RLV-TD
        </a>
        <a href="https://www.isro.gov.in/SLV.html" target="_blank">
          SLV
        </a>
        <a href="https://www.isro.gov.in/ScramjetEngine.html" target="_blank">
          Scramjet Engine-TD
        </a>
        <a href="https://www.redwolf.in/isro-merchandise-india" target="_blank">
          Shop
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
