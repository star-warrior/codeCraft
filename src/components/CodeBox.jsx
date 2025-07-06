import React from "react";
import Editor from "@monaco-editor/react";

function CodeBox(props) {
  const handleEditorWillMount = (monaco) => {
    monaco.editor.defineTheme("theme1", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "5c6370", fontStyle: "italic" },
        { token: "keyword", foreground: "c678dd" },
        { token: "number", foreground: "d19a66" },
        { token: "string", foreground: "98c379" },
        { token: "variable", foreground: "e06c75" },
        { token: "function", foreground: "61afef" },
        { token: "type", foreground: "56b6c2" },
      ],
      colors: {
        "editor.background": "#282c34",
        "editor.foreground": "#abb2bf",
        "editorCursor.foreground": "#528bff",
        "editor.lineHighlightBackground": "#2c313c",
        "editorLineNumber.foreground": "#636d83",
        "editor.selectionBackground": "#3e4451",
        "editorWhitespace.foreground": "#3e4451",
        "editorIndentGuide.background": "#3b4048",
        "editorBracketMatch.border": "#c678dd",
      },
    });
  };

  const handleEditorDidMount = (editor, monaco) => {
    monaco.editor.setTheme("theme1");
  };
  function handleEditorChange(value) {
    props.setCode(value);
    // console.log(value);
  }

  return (
    <div className="w-1/3 h-1/2 bg-gray-700 shadow-lg py-4 px-2 overflow-y-auto">
      <div className="title-box bg-gray-800 p-3 shadow-md w-min border-b border-gray-500">
        <span className="text-lg" style={{ color: props.color }}>
          {" "}
          {props.lang}{" "}
        </span>
      </div>
      <div className="code-content">
        <Editor
          className="w-full h-64 border-gray-500 border-[1px] text-white"
          placeholder={`Write your ${props.lang} code here...`}
          defaultLanguage={props.defLang.toLowerCase()}
          value={props.code}
          onChange={handleEditorChange}
          height={"100%"}
          beforeMount={handleEditorWillMount}
          onMount={handleEditorDidMount}
        ></Editor>
      </div>
    </div>
  );
}

export default CodeBox;
