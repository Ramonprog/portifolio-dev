import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-color: #00D2DF;
    --secondary-color :#c62580 ;
    --secondery-text-color: #c4c4c4;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body{
    min-width: 100vw;
    min-height: 100vh;
    font-family: 'Inter', sans-serif;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.textColorPrimary};
  }

  .btn {
    padding: 12px 30px;
    background-color: transparent;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${(props) => props.theme.colors.textColorPrimary};
  }

  .btn svg{
    color: ${(props) => props.theme.colors.textColorPrimary};
    font-size: 2rem;
    margin-right: 5px;
    margin-bottom: -3px;
  }

  .btn-gradient-primary {
    border: 2px solid;
    border-image:linear-gradient(to right bottom, #9358f7, #008bff, #00acff, #00c5fc, #10d7e2) 5;
  }

  .btn-gradient-secondary {
    border: 2px solid;
    border-image:linear-gradient(to right bottom, #d24074, #c62580, #b20790, #9501a2, #6518b4) 5;
  }

  .border-left {
    border-left: 3px solid var(--primary-color);
    border-radius: 4px 0px 0px 4px;
  }
  
`;
