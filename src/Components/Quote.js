import html2canvas from "html2canvas";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Quote = forwardRef((props, ref) => {
  const [quote, setQuote] = useState("Never Quit!");
  const [author, setAuthor] = useState("Unknown");
  const quoteApiUrl = "/api/random";

  async function getQuoteDetails() {
    try {
      const quoteResponse = await fetch(quoteApiUrl);
      let data = await quoteResponse.json();
      setQuote(data[0].q);
      setAuthor(data[0].a);
      props.updateQuoteInParent(data[0].q + " -" + data[0].a);
    } catch (error) {
      console.log(error);
    }
  }

  useImperativeHandle(ref, () => {
    return {
      getQuoteDetails,
    };
  });

  return (
    <div className="quote" id="quote">
      <q>{quote}</q>
      <p>- {author}</p>
    </div>
  );
});

export default Quote;
