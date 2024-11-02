import { useEffect, useState } from "react";

const getThemes = () => {
    const theme = localStorage.getItem("theme");
    if (!theme) {
        localStorage.setItem("theme", "light-theme");
        return "light-theme"
    }
    else {
        return theme;
    }
}

function Theme() {

    const [Themes, setThemes] = useState(getThemes)

    const toggleThemes = (e) => {
       const targetTheme = e.target.value;

       console.log(targetTheme);

       if (targetTheme === "light") {
           setThemes("light-theme");
       }
       else if (targetTheme === "dark") {
           setThemes("dark-theme");
       }
   }

   useEffect(() => {
       const refreshTheme = () => {
           localStorage.setItem("theme", Themes);
       };

       refreshTheme() ;

       document.body.className = Themes;
   }, [Themes]);

  return (
    <div className="theme-container" onClick={(e) => toggleThemes(e)}>
        <p>Theme</p>
        <button value="light" className="white"></button>
        <button value="dark" className="black"></button>
    </div>
  )
}

export default Theme