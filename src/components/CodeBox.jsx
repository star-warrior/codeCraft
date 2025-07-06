import React from "react";

function CodeBox(props) {
  return (
    <div className="w-1/3 h-1/2 bg-gray-700 shadow-lg p-4 overflow-y-auto">
      <div className="title-box bg-gray-800 p-3 shadow-md w-min border-b border-gray-500">
        <span className="text-lg" style={{ color: props.color }}>
          {" "}
          {props.lang}{" "}
        </span>
      </div>
      <div className="code-content">
        <textarea
          className="w-full h-64 bg-gray-800 text-white p-2"
          placeholder={`Write your ${props.lang} code here...`}
          value={props.code}
          onChange={(e) => props.setCode(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default CodeBox;
