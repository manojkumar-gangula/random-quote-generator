import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuoteContainer.css";
import Quote from "./Quote";

function QuoteContainer() {
  const quote = "Never Quit!";
  const author = "Unknown";
  const tweetContent = quote + " - " + author;
  const childRef = useRef();
  useEffect(() => {
    handleNewQuoteClick();
  }, []);

  function handleNewQuoteClick() {
    if (childRef.current) childRef.current.getQuoteDetails();
  }

  function handleScreenshotButton() {
    if (childRef.current) childRef.current.captureScreenshot();
  }

  return (
    <div className="quoteContainer">
      <Quote ref={childRef} />
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
