import React from 'react';

const ChooseTheme = () => {
  const themeDark = () => {
    document.documentElement.style.setProperty("--bg-color", "#0e1111");
    document.documentElement.style.setProperty("--lightcolor1", "#FFD73B");
    document.documentElement.style.setProperty("--lightcolor2", "#08FF8D");
    document.documentElement.style.setProperty("--darkcolor1", "#E322FF");
    document.documentElement.style.setProperty("--darkcolor2", "#1422FF");
  }

  const themeDarkGreen = () => {
    document.documentElement.style.setProperty("--bg-color", "#848F3B");
    document.documentElement.style.setProperty("--lightcolor1", "#21FFA8");
    document.documentElement.style.setProperty("--lightcolor2", "#FF502E");
    document.documentElement.style.setProperty("--darkcolor1", "#FFE05B");
    document.documentElement.style.setProperty("--darkcolor2", "#581287");
  }

  const themeWhite = () => {
    document.documentElement.style.setProperty("--bg-color", "#fff");
    document.documentElement.style.setProperty("--lightcolor1", "#399cbd");
    document.documentElement.style.setProperty("--lightcolor2", "#ffb6c1");
    document.documentElement.style.setProperty("--darkcolor1", "#000092");
    document.documentElement.style.setProperty("--darkcolor2", "#b6004c");
  }

  const themeViolet = () => {
    document.documentElement.style.setProperty("--bg-color", "#8205FF");
    document.documentElement.style.setProperty("--lightcolor1", "#16FA5E");
    document.documentElement.style.setProperty("--lightcolor2", "#249EFF");
    document.documentElement.style.setProperty("--darkcolor1", "#D4100D");
    document.documentElement.style.setProperty("--darkcolor2", "#FFA61F");
  }

  const themeRed = () => {
    document.documentElement.style.setProperty("--bg-color", "#C20600");
    document.documentElement.style.setProperty("--lightcolor1", "#FFC16B");
    document.documentElement.style.setProperty("--lightcolor2", "#E6F575");
    document.documentElement.style.setProperty("--darkcolor1", "#0D79BD");
    document.documentElement.style.setProperty("--darkcolor2", "#7A15C2");
  }

  const themeBlue = () => {
    document.documentElement.style.setProperty("--bg-color", "#2265BD");
    document.documentElement.style.setProperty("--lightcolor1", "#D696FA");
    document.documentElement.style.setProperty("--lightcolor2", "#FCAFA7");
    document.documentElement.style.setProperty("--darkcolor1", "#788C29");
    document.documentElement.style.setProperty("--darkcolor2", "#37BD77");
  }

  return(
    // Theme color section
    <section className="theme-color">
      <h3 className="theme-color__heading">Choose the theme</h3>
      <div className="theme-color__circle-dark" style={{backgroundColor: "#0e1111"}} onClick={themeDark}></div>
      <div className="theme-color__circle-violet" style={{backgroundColor: "#848F3B"}} onClick={themeDarkGreen}></div>
      <div className="theme-color__circle-white" style={{backgroundColor: "#fff"}} onClick={themeWhite}></div>
      <div className="theme-color__circle-dark" style={{backgroundColor: "#8205FF"}} onClick={themeViolet}></div>
      <div className="theme-color__circle-violet" style={{backgroundColor: "#C20600"}} onClick={themeRed}></div>
      <div className="theme-color__circle-white" style={{backgroundColor: "#2265BD"}} onClick={themeBlue}></div>
    </section>
    // End of Theme color section
  )
}

export default ChooseTheme;