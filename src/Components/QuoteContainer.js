import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuoteContainer.css";
import Quote from "./Quote";
import html2canvas from "html2canvas";

function QuoteContainer() {
  const [tweetContent, setTweetContent] = useState("Never Quit! - Unknown");
  const childRef = useRef();
  useEffect(() => {
    handleNewQuoteClick();
  }, []);

  function updateQuoteInParent(updatedContent) {
    setTweetContent(updatedContent);
  }
  function handleNewQuoteClick() {
    if (childRef.current) childRef.current.getQuoteDetails();
  }

  function handleScreenshotButton() {
    let canvasPromise = html2canvas(document.getElementById("quote"), {
      scale: 2,
      backgroundColor: null,
    });
    canvasPromise
      .then((canvas) => {
        let dataURL = canvas.toDataURL("image/png");
        let a = document.createElement("a");
        a.href = dataURL;
        a.download = "screenshot.png";
        a.click();
      })
      .catch((err) => {
        console.log("Not able to capture!");
        console.log(err);
      });
  }

  return (
    <div className="quoteContainer">
      <Quote ref={childRef} updateQuoteInParent={updateQuoteInParent} />
      <div className="options">
        <div>
          <a
            href={`https://x.com/compose/tweet?text=${encodeURIComponent(
              tweetContent
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter" />
          </a>
        </div>
        <div>
          <button
            className="btn btn-sm btn-primary"
            onClick={handleScreenshotButton}
          >
            Screenshot
          </button>
        </div>
        <div>
          <button
            className="btn btn-sm btn-success"
            onClick={handleNewQuoteClick}
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteContainer;
