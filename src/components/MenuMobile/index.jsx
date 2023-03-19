import React from "react";
import { Container } from "./styles";
import { IoClose } from "react-icons/io5";

const MenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {
  return (
    <Container
      onClick={() => setMenuIsVisible(!menuIsVisible)}
      isVisible={menuIsVisible}
    >
      <IoClose size={30} onClick={() => setMenuIsVisible(!menuIsVisible)} />
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
    </Container>
  );
};

export default MenuMobile;
