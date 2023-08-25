import React, { useEffect } from "react";
import BackImg from "./styles/pslv.webp";

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (section) {
          if (section.isIntersecting) {
            section.target.className = "active";
          }
        });
      },
      { threshold: 0.8 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
  }, []);
  return (
    <section style={{ backgroundImage: `url(${BackImg})` }}>
      <div class="content-outer">
        <div class="content">
          <h3>Try Our Data Storage Solution for Individuals</h3>
          <h2>Seamless, Secure and Reliable Data Transfer</h2>
          <a href="https://satellix-upload.netlify.app/" target="_blank">
            <span>Try It Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
