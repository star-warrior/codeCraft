import React, { useRef, useEffect } from "react";

function Output({ html, css, js }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      //   console.log("Found the iframe element");

      const message = {
        html: html,
        css: css,
        js: js,
      };
      iframe.contentWindow.postMessage(message, "*");
      console.log("Message sent to iframe:", message);
    }
  }, [html, css, js]);

  return (
    <div>
      <div className="w-full h-1/2 border-0 bg-gray-700 border-gray-500 p-2">
        <div className="textBox bg-gray-800 p-3 border-b border-gray-500 shadow-md w-min">
          <span className=" text-lg text-white">Output</span>
        </div>
      </div>
      <iframe
        ref={iframeRef}
        src="./pagePreview.html"
        frameBorder="0"
        className="w-full h-full "
      ></iframe>
    </div>
  );
}

export default Output;
