import About from "./components/About";
import Connect from "./components/Connect";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { fadeInTableRows } from "./utils/fadeInTable";
import { initializeTilt } from "./utils/tilt";

function App() {
  window.onload = () => {
    initializeTilt();
    fadeInTableRows();
  };

  return (
    <>
      {/* Navigation bar */}
      <Navbar />

      <div className="container">
        {/* Name and Profile --> */}
        {/* TODO: navigate to `components/Profile.tsx and update all TODO:s */}
        <Profile />

        <div className="content-separator"></div>

        {/* Short Bio */}
        {/* TODO: navigate to `components/Bio.tsx and update all TODO:s */}
        <About />

        <div className="content-separator"></div>

        {/* Projects */}
        {/* TODO: navigate to `components/Projects.tsx and update all TODO:s */}
        <Projects />

        <div className="content-separator"></div>

        {/* Activites and --> */}
        {/* TODO: with your info --> */}
        <h2 id="interests">How I spend my free time?</h2>
        <div className="interests-table-container">
          <table className="interests-table">
            {/* activity 1 */}
            <tr>
              <td>
                <img
                  src="/images/activities/activity1.jpeg"
                  alt="coding with David Malin at HackHarvard"
                />
              </td>
              <td>
                <h3>Coding</h3>
                <p>
                  Even though we have to code constantly for className, this is
                  something that I genuinely enjoy learning in my free time.
                </p>
                <p>
                  Especially for when it comes to
                  <strong>web-development</strong>, where the creative
                  opportunities are literally endless, I find myself spending
                  hours going down rabbit holes of formative exploration.
                </p>
              </td>
              <td>
                <h3>Quicklinks</h3>
                <ul>
                  <li>
                    <a
                      href="https://github.com/whyphi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhyPhi
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://grub-gallery.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GrubGallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/wderocco8/ZipSurf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ZipSurf
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/alexjmiller5/BU-GCalSync"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BU-GCalSync
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            {/* activity 2 */}
            <tr>
              <td>
                <img
                  src="/images/activities/activity2.jpeg"
                  alt="rock climbing at FitRec"
                />
              </td>
              <td>
                <h3>Rock Climbings</h3>
                <p>
                  I started rock climbing about 2 years ago, and since then, it
                  has been nothing short of amazing (maybe even
                  <em>addicting</em>).
                </p>
                <p>
                  I love the challenge of finding the optimal "beta" through a
                  problem, and pushing your body to it's limit.
                </p>
              </td>
              <td>
                <h3>Quicklinks</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.bu.edu/fitrec/what-we-offer/outdoor-programs/rock-climbing/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Fitrec Climbing Wall
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            {/* activity 3 */}
            <tr>
              <td>
                <img
                  src="/images/activities/activity3.jpeg"
                  alt="tabling with PCT (Phi Chi Theta)"
                />
              </td>
              <td>
                <h3>BU Phi Chi Theta (PCT)</h3>
                <p>
                  I joined PCT (a professional business fraternity) my very
                  first semesert at BU. It was probably one of the most
                  impactfuly decsions I've made in terms of the
                  <strong>friends</strong> made, <strong>skills</strong>{" "}
                  acquired, and abundance of unique experiences. (Feel free to
                  check out our website WhyPhi 😜)
                </p>
              </td>
              <td>
                <h3>Quicklinks</h3>
                <ul>
                  <li>
                    <a
                      href="https://bupct.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BUPCT
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/whyphi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhyPhi
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            {/* activity 4 */}
            <tr>
              <td>
                <img
                  src="/images/activities/activity4.jpeg"
                  alt="cooking with my mom"
                />
              </td>
              <td>
                <h3>Cooking</h3>
                <p>
                  Growing up, I always had the opportunity to watch my mom cook,
                  and even help out in the kitchen. Once my parents started
                  working more, I ended up taking more responsibility for
                  cooking meals for the whole family.
                </p>
                <p>
                  This slowly grew into a passion, and now is something that I
                  spend a lot of free time doing for fun!
                </p>
              </td>
              <td>
                <h3>Quicklinks</h3>
                <ul>
                  <li>
                    <a
                      href="https://www.babi.sh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Babish Culinary Universe
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cooking.nytimes.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NYT Cooking
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
            {/* Add more table rows as needed --> */}
          </table>
        </div>

        <div className="content-separator"></div>

        {/* connect Section */}
        {/* TODO: navigate to `components/Connect.tsx and update all TODO:s */}
        <Connect />
      </div>
    </>
  );
}

export default App;
