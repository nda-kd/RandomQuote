import React, { useEffect, useState } from "react";
import "./QuoteBox.scss";
import TwitterIcon from "../../assets/twitter.svg";
import Next from "../../assets/next.svg";
import { data } from "../../quotes.json";

function QuoteBox() {
  const [randomQ, setRandomQ] = useState({});

  const RandomGenerateQ = () => {
    let a = Math.floor(Math.random() * (9 - 0 + 1));
    setRandomQ(data[a]);
  };

  useEffect(() => {
    RandomGenerateQ();
  }, []);
  return (
    <div id="quote-box">
      <div className="quote-wrap">
        <div id="text">{randomQ.Quote}</div>
        <div id="author-wrap">
          <span id="author">{randomQ.author}</span>
        </div>
      </div>
      <div className="button-wrap">
        <a
          href={"https://twitter.com/intent/tweet?text=" + randomQ.Quote}
          target="_blank"
          rel="noreferrer"
          id="tweet-quote"
        >
          <img src={TwitterIcon} alt="twitter-icon"></img>
        </a>
        <button id="new-quote" onClick={RandomGenerateQ}>
          <span>Next</span>
          <img src={Next} alt="" />
        </button>
      </div>
    </div>
  );
}

export default QuoteBox;
