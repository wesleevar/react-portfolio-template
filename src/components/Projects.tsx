/**
 * `Projects` returns a list of `Project` components,
 * defined in the following component. Be sure to replace
 * all of the information in this file (do not edit `Project.tsx`
 * only edit `Projects.tsx`)
 */
export default function Projects() {
  return (
    <>
      {/* TODO: replace with your info --> */}
      <h2 id="projects">Projects</h2>
      <div className="projects-container">
        {/* project 1 */}
        <a
          href="https://github.com/wderocco8/Grub-Gallery"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link tilt tilt-small"
        >
          <div className="project">
            <img src="/images/projects/project1.jpeg" alt="Grub Gallery" />
            <h3>Grub Gallery</h3>
            <p>
              Grub Gallery is a dynamic web application built using the MERN
              stack, integrating Google OAuth, Spoonacular API, and Google
              Calendar API. This project allows users to discover and
              personalize dishes and recipes effortlessly.
            </p>
          </div>
        </a>

        {/* project 2 */}
        <a
          href="https://github.com/wderocco8/ZipSurf"
          target="_blank"
          rel="noopener noreferrer"
          className="project-link tilt tilt-small"
        >
          <div className="project">
            <img src="/images/projects/project2.jpeg" alt="ZipSurf" />
            <h3>ZipSurf</h3>
            <p>
              ZipSurf is a React based web application designed to enabling
              users to create, save, delete, and export shortened URLs
            </p>
          </div>
        </a>
        {/* Add more blocks as needed --> */}
      </div>
    </>
  );
}
