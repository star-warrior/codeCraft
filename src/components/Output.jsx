import React, { useRef, useEffect } from "react";

function Output({ html, css, js }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    let flipper = true;
    if (flipper) {
      flipper = false;
      setTimeout(() => {
        flipper = true;
        const iframe = iframeRef.current;
        if (iframe) {
          //   console.log("Found the iframe element");

          const message = {
            html: html,
            css: css,
            js: js,
          };
          iframe.contentWindow.postMessage(message, "*");
          // console.log("Message sent to iframe:", message);
        }

        const channel = new BroadcastChannel("code-updates");
        channel.postMessage({
          html: html,
          css: css,
          js: js,
        });
        // console.log("Broadcast sent to all tabs:", { html, css, js });

        // Clean up the channel
        return () => channel.close();
      }, 1500);
    }
  }, [html, css, js]);

  const openInNewTab = () => {
    // Encode the data to safely pass in URL
    const encodedData = btoa(
      JSON.stringify({
        html: html || "",
        css: css || "",
        js: js || "",
      })
    );

    // Open in new tab with data as URL parameter
    window.open(`./pagePreview.html?data=${encodedData}`, "_blank");
  };

  return (
    <div>
      <div className="w-full h-1/2 border-0 bg-[var(--inactive-bg)] border-gray-500 p-2 flex justify-between items-center">
        <div className="textBox bg-[var(--active-bg)] p-3 border-b border-gray-500 shadow-md w-min">
          <span className=" text-lg text-white">Output</span>
        </div>
        <div className="open-in-new bg-[var(--primary-color)] p-2 hover:bg-red-600 text-white hover:text-gray-200">
          {" "}
          <button className="" onClick={openInNewTab}>
            Open in new Tab
          </button>
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
