import About from "./components/About";
import Activities from "./components/Activities";
import Chatbot from "./components/ChatBot";
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
        {/* TODO: navigate to `components/Activities.tsx and update all TODO:s */}
        <Activities />

        <div className="content-separator"></div>

        {/* connect Section */}
        {/* TODO: navigate to `components/Connect.tsx and update all TODO:s */}
        <Connect />

        {/* chatbot Section */}
        {/* TODO: navigate to `components/Chatbot.tsx and update all TODO:s */}
        <Chatbot />
      </div>
    </>
  );
}

export default App;
