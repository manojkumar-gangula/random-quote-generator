import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./QuoteContainer.css";
function QuoteContainer() {
  const [quote, setQuote] = useState("No Quote!");
  const [author, setAuthor] = useState("No Author!");
  const tweetContent = quote + " - " + author;
  const quoteApiUrl = "/api/random";
  useEffect(() => {
    getQuoteDetails(quoteApiUrl);
  }, []);
  async function getQuoteDetails(quoteApiUrl) {
    try {
      console.log("fetching new quote");
      const quoteResponse = await fetch(quoteApiUrl);
      let data = await quoteResponse.json();
      setQuote(data[0].q);
      setAuthor(data[0].a);
    } catch (error) {
      console.log(error);
    }
  }
  function handleNewQuoteClick() {
    console.log("fetching new quote from click");
    getQuoteDetails(quoteApiUrl);
  }

  useEffect(() => {
    console.log(quote);
  }, [quote]);

  return (
    <div className="quoteContainer">
      <div className="quote">
        <q>{quote}</q>
        <p>- {author}</p>
      </div>
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
