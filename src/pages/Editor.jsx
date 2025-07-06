import React from "react";
import Navbar from "../components/Navbar";
import CodeBox from "../components/CodeBox";

function Editor() {
  const [htmlCode, setHtmlCode] = React.useState("");
  const [cssCode, setCssCode] = React.useState("");
  const [jsCode, setJsCode] = React.useState("");

  return (
    <div>
      <Navbar />

      <div className="flex flex-row justify-center align-middle">
        <CodeBox
          lang="HTML"
          color="#FF5722"
          code={htmlCode}
          setCode={setHtmlCode}
        />
        <CodeBox
          lang="CSS"
          color="#264DE4"
          code={cssCode}
          setCode={setCssCode}
        />
        <CodeBox lang="JS" color="#F7DF1E" code={jsCode} setCode={setJsCode} />
      </div>
    </div>
  );
}

export default Editor;
