import html2canvas from "html2canvas";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Quote = forwardRef((props, ref) => {
  const [quote, setQuote] = useState("Never Quit!");
  const [author, setAuthor] = useState("Unknown");
  const quoteApiUrl = "/api/random";
  const screenShotRef = useRef();

  async function getQuoteDetails() {
    try {
      const quoteResponse = await fetch(quoteApiUrl);
      let data = await quoteResponse.json();
      setQuote(data[0].q);
      setAuthor(data[0].a);
    } catch (error) {
      console.log(error);
    }
  }

  useImperativeHandle(ref, () => {
    return {
      getQuoteDetails,
      captureScreenshot,
    };
  });

  const captureScreenshot = () => {
    let canvasPromise = html2canvas(screenShotRef.current);
    canvasPromise.then((canvas) => {
      let dataURL = canvas.toDataURL("image/png");

      // Create a link element
      let a = document.createElement("a");
      // Set the href of the link to the data URL of the image
      a.href = dataURL;
      // Set the download attribute of the link
      a.download = "screenshot.png";
      a.click();
    });
  };

  return (
    <div className="quote" ref={screenShotRef}>
      <p>Hello</p>
      <q>{quote}</q>
      <p>- {author}</p>
    </div>
  );
});

export default Quote;
