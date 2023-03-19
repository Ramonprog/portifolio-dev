import { Container } from "./styles";
import Profile from "../../assets/profile-bgless.png";
import { FiDownloadCloud } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Cv from "../../assets/cv.pdf";

const ProfileUser = () => {
  return (
    <Container>
      <div className="container-profile" id="profile">
        <div className="image">
          <img src={Profile} alt="Imagem de perfil de Alisson" />
        </div>
        <div className="about">
          <h2>Sobre mim</h2>

          <h3>Petrolina, PE, Brasil</h3>

          <p>
            Após mais de 8 anos sendo pizzaiolo pude desenvolver habilidades
            como liderança, atenção a diversos processos simultâneos,
            relacionamento com clientes e principalmente a comunicação, fui
            apresentado ao mundo da programação, que até então eu julgava ser
            algo muito distante, até escrever o meu primeiro "Hello World!".
            Então decidi aceitar o desafio de me tornar desenvolvedor full stack
            com foco no Front-End.
          </p>

          <div className="container-links">
            <a
              href={Cv}
              download
              target="_blank"
              className="btn btn-gradient-primary"
            >
              <FiDownloadCloud />
              Currículo
            </a>

            <a
              href="https://wa.me/5587996342606"
              target="_blank"
              className="btn btn-gradient-secondary"
            >
              <FaWhatsapp />
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProfileUser;
