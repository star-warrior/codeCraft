import React, { useCallback, useEffect, useRef } from "react";
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
    monaco.editor.defineTheme("dracula", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "6272a4", fontStyle: "italic" },
        { token: "keyword", foreground: "ff79c6" },
        { token: "number", foreground: "bd93f9" },
        { token: "string", foreground: "f1fa8c" },
        { token: "variable", foreground: "f8f8f2" },
        { token: "function", foreground: "50fa7b" },
        { token: "type", foreground: "8be9fd" },
      ],
      colors: {
        "editor.background": "#282a36",
        "editor.foreground": "#f8f8f2",
        "editorCursor.foreground": "#f8f8f0",
        "editor.lineHighlightBackground": "#44475a",
        "editorLineNumber.foreground": "#6272a4",
        "editor.selectionBackground": "#44475a",
        "editorWhitespace.foreground": "#44475a",
        "editorIndentGuide.background": "#44475a",
        "editorBracketMatch.border": "#ff79c6",
      },
    });
    monaco.editor.defineTheme("atomOneDark", {
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
    monaco.editor.defineTheme("tokyoNight", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "565f89", fontStyle: "italic" },
        { token: "keyword", foreground: "bb9af7" },
        { token: "number", foreground: "ff9e64" },
        { token: "string", foreground: "9ece6a" },
        { token: "variable", foreground: "c0caf5" },
        { token: "function", foreground: "7aa2f7" },
        { token: "type", foreground: "2ac3de" },
      ],
      colors: {
        "editor.background": "#1a1b26",
        "editor.foreground": "#c0caf5",
        "editorCursor.foreground": "#c0caf5",
        "editor.lineHighlightBackground": "#292e42",
        "editorLineNumber.foreground": "#3b4261",
        "editor.selectionBackground": "#364a82",
        "editorWhitespace.foreground": "#3b4261",
        "editorIndentGuide.background": "#2e3c64",
        "editorBracketMatch.border": "#7aa2f7",
      },
    });
    monaco.editor.defineTheme("tokyoNightStorm", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "6272a4", fontStyle: "italic" },
        { token: "keyword", foreground: "bb9af7" },
        { token: "number", foreground: "ff9e64" },
        { token: "string", foreground: "9ece6a" },
        { token: "variable", foreground: "c0caf5" },
        { token: "function", foreground: "7aa2f7" },
        { token: "type", foreground: "2ac3de" },
      ],
      colors: {
        "editor.background": "#24283b",
        "editor.foreground": "#c0caf5",
        "editorCursor.foreground": "#c0caf5",
        "editor.lineHighlightBackground": "#292e42",
        "editorLineNumber.foreground": "#3b4261",
        "editor.selectionBackground": "#364a82",
        "editorWhitespace.foreground": "#3b4261",
        "editorIndentGuide.background": "#2e3c64",
        "editorBracketMatch.border": "#7aa2f7",
      },
    });
  };

  const editorRef = useRef(null);
  const monacoRef = useRef(null);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    monaco.editor.setTheme(props.theme);
  };

  useEffect(() => {
    if (monacoRef.current) {
      monacoRef.current.editor.setTheme(props.theme);
      console.log("Theme Chnged to: ", props.theme);
    }
  }, [props.theme]);

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
