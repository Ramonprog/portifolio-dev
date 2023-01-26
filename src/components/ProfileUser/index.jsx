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
            Desenvolvedor Web Front-End em transição de carreira, após 8 anos
            trabalhando como autônomo e pizzaiolo, onde eu tive a oportunidade
            de liderar pessoas, adquirir uma comunicação mais assertiva,
            gerenciar conflitos e trabalho em equipe.
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
              href="https://wa.me/5587988296171"
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
