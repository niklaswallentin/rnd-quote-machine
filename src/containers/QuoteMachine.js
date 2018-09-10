import React, { Component } from "react";

import Quote from "../components/Quote";
import QuoteTools from "../components/QuoteTools";

class QuoteMachine extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      currentQuote: ""
    };

    this.updateQuote = this.updateQuote.bind(this);
    this.tweetIt = this.tweetIt.bind(this);
  }
  componentWillMount() {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    ).then(response => {
      response.json().then(json => {
        let quotes = json.quotes;
        let randomNumber = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomNumber];
        console.log(randomQuote);
        this.setState({
          quotes,
          currentQuote: randomQuote
        });
      });
    });
  }
  updateQuote() {
    let quotes = this.state.quotes;
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let newQuote = quotes[randomNumber];
    console.log(newQuote);
    this.setState({
      currentQuote: newQuote
    });
  }
  tweetIt() {
    let tweet = `"${this.state.currentQuote.quote}" - ${
      this.state.currentQuote.author
    }`;
    window.open(`http://twitter.com/intent/tweet?text=${tweet}`, "_blank");
  }
  render() {
    return (
      <div
        className="quoteBox"
        style={{ margin: "100px auto", maxWidth: "600px" }}
      >
        <Quote quote={this.state.currentQuote} />
        <QuoteTools
          onUpdate={this.updateQuote}
          onTweet={this.tweetIt}
          quote={this.state.quote}
        />
      </div>
    );
  }
}

export default QuoteMachine;
