import React, { Component } from "react";

class Slider extends Component {
  render() {
    return (
      <div id="slider" className="slider-small">
        <h1>{this.props.title}</h1>
        <a href="miforlumario.html" className="btn-white"> {this.props.btn}
        
        </a>
      </div>
    );
  }
}

export default Slider;
