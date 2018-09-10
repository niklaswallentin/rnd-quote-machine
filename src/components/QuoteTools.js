import React from "react";

const QuoteTools = props => (
  <div>
    <button className="new-quote" onClick={props.onUpdate}>
      New Quote
    </button>
    <button className="tweet-quote" onClick={props.onTweet}>
      Tweet
    </button>
  </div>
);

export default QuoteTools;
