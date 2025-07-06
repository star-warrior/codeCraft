import React from "react";
import Navbar from "../components/Navbar";
import CodeBox from "../components/CodeBox";
import Output from "../components/Output";

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
          defLang="html"
        />
        <CodeBox
          lang="CSS"
          color="#264DE4"
          code={cssCode}
          setCode={setCssCode}
          defLang="css"
        />
        <CodeBox
          lang="JS"
          color="#F7DF1E"
          code={jsCode}
          setCode={setJsCode}
          defLang="javascript"
        />
      </div>
      <Output html={htmlCode} css={cssCode} js={jsCode} />
    </div>
  );
}

export default Editor;
