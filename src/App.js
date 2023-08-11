import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const initThemeBar = (theme) => {
    const metaThemeColor = document.getElementById("theme-color-meta");
    const primaryColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue(theme);
    metaThemeColor.setAttribute("content", primaryColor);
  };

  const defineClass = () => {
    const targetElement = document.querySelector("body");
    let currentTheme = localStorage.getItem("theme");

    let isActiveToggle = 0;

    if (currentTheme === "--theme-color_light") {
      initThemeBar(currentTheme);
      targetElement.classList.remove("dark");
      isActiveToggle = 0;
    } else if (currentTheme === "--theme-color_dark") {
      initThemeBar(currentTheme);
      targetElement.classList.add("dark");
      isActiveToggle = 1;
    } else {

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Le thème sombre est activé
        console.log("Thème sombre activé");
        isActiveToggle = 1;
        initThemeBar(currentTheme);
        targetElement.classList.add("dark");
      } else {
        // Le thème clair est activé
        console.log("Thème clair activé");
        isActiveToggle = 0;
        initThemeBar(currentTheme);
        targetElement.classList.remove("dark");
      }


    }

    return isActiveToggle;
  };


  const isActiveToggle = defineClass();

  console.log("isActiveToggle", isActiveToggle);




  return (
    <>
      <Header isActiveToggle={isActiveToggle}></Header>
      <Routes>
        <Route  path="/home" element={<Home isActiveToggle={isActiveToggle} />} />
        <Route  path="/" element={<Home isActiveToggle={isActiveToggle} />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
