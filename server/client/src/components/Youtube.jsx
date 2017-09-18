import React, { Component } from "react";

class Youtube extends Component {
  render() {
    return (
      <div>
        <button>Get Youtube Videos</button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8TDcGYmEgyM"
          frameborder="0"
          allowfullscreen
        />
      </div>
    );
  }
}

export default Youtube;
