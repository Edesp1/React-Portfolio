import { removeHyphensAndCapitalize } from '../../utils/helpers';

function Project({ project }) {
  const { name, repo, link, description } = project;
  <h2>
    hi
  </h2>
  return (
    <div className="project" key={name}>
      {/* <img
        src={projects[name]}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      /> */}
      <div className="project-text">
        <h3>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
