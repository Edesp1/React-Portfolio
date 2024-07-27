import { useState } from 'react';
import Project from "../components/Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Weather Forecast',
      description: 'Look at the weather in certain Oregon cities!',
      link: "https://edesp1.github.io/Weather-Forecast/",
      repo: "https://github.com/Edesp1/Weather-Forecast"
    },
    {
      name: 'Workday Scheduler',
      description: 'Schedule your workday !',
      link: "https://edesp1.github.io/Workday-Scheduler/",
      repo: "https://github.com/Edesp1/Workday-Scheduler"
    },
    {
      name: 'Nasa DataBase',
      description: 'Displays information about the world from the Nasa DataBase',
      link: "https://austin-marlatt.github.io/nasa-data-base/",
      repo: "https://https://github.com/Edesp1/nasa-data-base"
    },
    {
      name: 'Coding Quiz',
      description: 'A quiz based off Web Development !',
      link: "https://edesp1.github.io/challenge4/",
      repo: "https://github.com/Edesp1/challenge4/"
    },
    {
      name: 'Password Generator',
      description: 'Makes a Random Generated password based on the awnsers you provide!',
      link: "https://edesp1.github.io/challenge3/",
      repo: "https://github.com/Edesp1/challenge3"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
