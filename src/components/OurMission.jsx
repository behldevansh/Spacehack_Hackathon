import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles/LandingSection.css";
import BackImg from "./styles/linking_image.webp";

// export default function OurMission() {
//   return (
//     <section style={{ backgroundImage: `url(${BackImg})` }}>
//       <div class="content-outer">
//         <div class="content">
//           <h3>Our Mission</h3>
//           <h2>
//             e believe that the wonders of space should be accessible to
//             everyone, and we're committed to making the universe's boundless
//             beauty and complexity come alive in the digital realm.
//           </h2>
//           <a
//             href="https://www.youtube.com/live/AeF7OpbOwjQ?feature=share"
//             target="_blank"
//           >
//             <span>Watch</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

const OurMission = () => {
    return (
            <section style={{ backgroundImage: `url(${BackImg})` }}>
              <div class="content-outer">
                <div class="content">
                  <h3>Our Mission</h3>
                  <h2>
                    e believe that the wonders of space should be accessible to
                    everyone, and we're committed to making the universe's boundless
                    beauty and complexity come alive in the digital realm.
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
export default OurMission;
