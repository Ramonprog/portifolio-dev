import { useEffect, useState } from "react";
import Header from "./components/Header";
import Links from "./components/Links";
import GlobalStyles from "./styles/GlobalStyles";
import light from "./themes/light";

import { ThemeProvider } from "styled-components";
import Academic from "./components/Academic";
import Footer from "./components/Footer";
import MyProjects from "./components/MyProjects";
import ProfileUser from "./components/ProfileUser";
import Skills from "./components/Skills";
import dark from "./themes/dark";
import MenuMobile from "./components/MenuMobile";

function App() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", "dark");
  }, []);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme");
  });

  const getStorage = () => {
    const storageItem = localStorage.getItem("theme");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    getStorage();
  }, [theme]);

  const OnChangeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme == "dark" ? dark : light}>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <Header
        OnChangeTheme={OnChangeTheme}
        setMenuIsVisible={setMenuIsVisible}
      />
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
