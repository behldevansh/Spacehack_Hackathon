import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./styles/ISRO_Logo.png";

const navigation = [
  { name: "Our Services", href: "#", current: false },
  { name: "Our Mission", href: "#", current: false },
  { name: "Our Vision", href: "#", current: false },
  { name: "Who are We ?", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <header>
      <a href="/" class="logo">
        <img src={logo} alt="" style={{ height: "80px", paddingTop: "30px" }} />
      </a>
      <nav class="center-nav">
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
      </nav>
      <nav class="right-nav">
        <a href="https://www.redwolf.in/isro-merchandise-india" target="_blank">
          Shop
        </a>
      </nav>
    </header>
  );
}
