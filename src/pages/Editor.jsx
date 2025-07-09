import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import CodeBox from "../components/CodeBox";
import Output from "../components/Output";

function Editor() {
  const [htmlCode, setHtmlCode] = React.useState("");
  const [cssCode, setCssCode] = React.useState("");
  const [jsCode, setJsCode] = React.useState("");

  const themeNames = [
    "theme1",
    "dracula",
    "atomOneDark",
    "tokyoNight",
    "tokyoNightStorm",
  ];

  const [theme, setTheme] = useState("theme1");

  useEffect(() => {
    const root = document.getElementById("root");

    themeNames.map((themeName) => {
      root.classList.remove(themeName);
    });
    root.classList.add(theme);
  }, [theme]);

  return (
    <div>
      <Navbar setTheme={setTheme} theme={theme} />

      <div className="flex flex-row justify-center align-middle">
        <CodeBox
          lang="HTML"
          color="#FF5722"
          code={htmlCode}
          setCode={setHtmlCode}
          defLang="html"
          theme={theme}
        />
        <CodeBox
          lang="CSS"
          color="#264DE4"
          code={cssCode}
          setCode={setCssCode}
          defLang="css"
          theme={theme}
        />
        <CodeBox
          lang="JS"
          color="#F7DF1E"
          code={jsCode}
          setCode={setJsCode}
          defLang="javascript"
          theme={theme}
        />
      </div>
      <Output html={htmlCode} css={cssCode} js={jsCode} />
    </div>
  );
}

export default Editor;
