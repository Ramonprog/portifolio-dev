import { Container } from "./styles";
import Switch from "react-switch";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { FiMoon, FiSun } from "react-icons/fi";

const Header = ({ OnCHangeTheme }) => {
  const { name } = useContext(ThemeContext);

  return (
    <Container>
      <div className="logo">
        <h2>Portifólio</h2>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#profile">Sobre mim</a>
          </li>
          <li>
            <a href="#academic">Acadêmico</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
        </ul>
      </nav>
      <div className="toggle">
        <FiSun />
        <Switch
          onChange={OnCHangeTheme}
          checked={name === "dark"}
          height={20}
          width={40}
          checkedIcon={false}
          uncheckedIcon={false}
          handleDiameter={20}
          offColor="#b6b3b3"
          onColor="#232323"
        />
        <FiMoon />
      </div>
    </Container>
  );
};

export default Header;
