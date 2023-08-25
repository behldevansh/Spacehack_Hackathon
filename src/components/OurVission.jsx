import React from "react";
import "./styles/LandingSection.css";
import BackImg from "./styles/ourvission.jpg";

export default function OurVission() {
  return (
    <section style={{ backgroundImage: `url(${BackImg})` }}>
      <div class="content-outer">
        <div class="content">
          <h3>Our Vission</h3>
          <h2>
At Satellix , our vision is to be a guiding light in the cosmos of information, exploration, and inspiration. 
</h2>
          <a
            href="https://www.youtube.com/live/AeF7OpbOwjQ?feature=share"
            target="_blank"
          >
            <span>Watch</span>
          </a>
        </div>
      </div>
    </section>
  );
}
