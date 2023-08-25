import { Fragment, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet, Link } from "react-router-dom";
import logo from "./styles/logo 1.png";

const navigation = [
  { name: "Our Services", href: "#", current: false },
  { name: "Our Mission", href: "#", current: false },
  { name: "Our Vision", href: "#", current: false },
  { name: "Who are We ?", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// export default function Navbar() {
//   useEffect(() => {
//     let isActive = false;
//     function toggle() {
//       if (isActive) {
//         //disable active
//         document.querySelector(".hamburger").className = "hamburger";
//         document.querySelector(".shadow").className = "shadow";
//         document.querySelector(".mobile-nav").className = "mobile-nav";
//         isActive = false;
//       } else {
//         //activate
//         document.querySelector(".hamburger").className = "hamburger active";
//         document.querySelector(".shadow").className = "shadow active";
//         document.querySelector(".mobile-nav").className = "mobile-nav active";
//         isActive = true;
//       }
//     }
//   }, []);
//   return (
//     <header>
//       <a href="/" class="logo">
//         <img src={logo} alt="" style={{ height: "80px", paddingTop: "30px" }} />
//       </a>
//       <nav class="center-nav">
//         <a href="/" target="_blank">
//           About Us
//         </a>
//         <a href="/" target="_blank">
//           Services
//         </a>
//         <a href="https://www.isro.gov.in/GSLVmk3_CON.html" target="_blank">
//           Mission
//         </a>
//         <a href="https://www.isro.gov.in/Gaganyaan.html" target="_blank">
//           Vision
//         </a>
//       </nav>
//       <nav class="right-nav">
//         <a href="https://www.redwolf.in/isro-merchandise-india" target="_blank">
//           Shop
//         </a>
//       </nav>
//       <div class="shadow"></div>
//       {/* <button class="hamburger" onclick="toggle()">
//         <span></span>
//         <span></span>
//         <span></span>
//       </button> */}
//       <nav class="mobile-nav">
//         <a href="https://www.isro.gov.in/PSLV_CON.html" target="_blank">
//           PSLV
//         </a>
//         <a href="https://www.isro.gov.in/GSLV_CON.html" target="_blank">
//           GSLV
//         </a>
//         <a href="https://www.isro.gov.in/GSLVmk3_CON.html" target="_blank">
//           LVM-3
//         </a>
//         <a href="https://www.isro.gov.in/Gaganyaan.html" target="_blank">
//           HRLV
//         </a>
//         <a href="https://www.isro.gov.in/RLVTD.html" target="_blank">
//           RLV-TD
//         </a>
//         <a href="https://www.isro.gov.in/SLV.html" target="_blank">
//           SLV
//         </a>
//         <a href="https://www.isro.gov.in/ScramjetEngine.html" target="_blank">
//           Scramjet Engine-TD
//         </a>
//         <a href="https://www.redwolf.in/isro-merchandise-india" target="_blank">
//           Shop
//         </a>
//       </nav>
//     </header>
//   );
// }


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
        <a href="/" target="_blank">
          About Us
        </a>
        <a href="/" target="_blank">
          Services
        </a>
        <a href="https://www.isro.gov.in/GSLVmk3_CON.html" target="_blank">
          Mission
        </a>
        <a href="https://www.isro.gov.in/Gaganyaan.html" target="_blank">
          Vision
        </a>
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
