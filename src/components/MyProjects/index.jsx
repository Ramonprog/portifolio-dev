import { Container } from "./styles";

import { projects } from "../../dataBase/projects";
import { FiLink } from "react-icons/fi";
import { FaGithubAlt } from "react-icons/fa";

const MyProjects = () => {
  return (
    <Container>
      <div className="container-projects" id="projects">
        <div className="title">
          <h2>Projetos</h2>
        </div>
        <div className="projects">
          {projects.map((item) => (
            <div className="project" key={item.id}>
              <img src={item.banner} alt="banner do projeto" />
              <h3>{item.name}</h3>
              <p>{item.techs}</p>
              <div className="links">
                <a
                  href={item.linkNetlify}
                  target="_blank"
                  className="btn btn-gradient-primary"
                >
                  <FiLink /> Visualizar
                </a>

                <a
                  href={item.linkGitHub}
                  target="_blank"
                  className="btn btn-gradient-secondary"
                >
                  <FaGithubAlt /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MyProjects;
