import { useEffect, useState } from "react";
import Header from "./components/Header";
import Links from "./components/Links";
import light from "./themes/light";
import GlobalStyles from "./styles/GlobalStyles";

import { ThemeProvider } from "styled-components";
import dark from "./themes/dark";
import ProfileUser from "./components/ProfileUser";
import Skills from "./components/Skills";
import Academic from "./components/Academic";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, []);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme");
  });

  console.log(theme + "do theme");

  const getStorage = () => {
    const storageItem = localStorage.getItem("theme");
    console.log(storageItem + "do storageItem");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    getStorage();
  }, [theme]);

  const OnCHangeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme == "dark" ? dark : light}>
      <Header OnCHangeTheme={OnCHangeTheme} />
      <Links />
      <ProfileUser />
      <Academic />
      <Skills />
      <MyProjects />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
