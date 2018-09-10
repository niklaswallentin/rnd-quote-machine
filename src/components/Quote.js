import React from "react";

const Quote = ({ quote }) => (
  <div>
    <h3 className="quote">{quote.quote}</h3>
    <p className="author">{quote.author}</p>
  </div>
);

export default Quote;
