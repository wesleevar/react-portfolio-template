import Typewriter from "typewriter-effect";

export default function Profile() {
  return (
    <div className="profile-flex">
      <div>
        <h1>
          {/* TODO: replace `strings` with custom phrases (lines 39-41) --> */}
          <Typewriter
            options={{
              strings: [
                "Heyo peeps, I'm Will.",
                "I love to learn.",
                "William De Rocco :)",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <ul>
          {/* TODO: with your info --> */}
          <li>Class of 2025</li>
          <li>B.A. in Computer Science, Minor in Economics</li>
          <li>Teaching Assistant for cs412 (Full-Stack Applications)</li>
        </ul>
      </div>

      {/* TODO: with your info --> */}
      <div className="profile tilt">
        <a
          href="https://github.com/wderocco8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="profile-img"
            src="/images/profile/profile.jpeg"
            alt="profile"
          />
        </a>
      </div>
    </div>
  );
}
