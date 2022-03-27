import React, { Component } from 'react';
import './swicherLight.css';

export default class swicherLight extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log(this.state.isOpen);
  };
  render() {
    const { isOpen } = this.state;
    return (
      <div className="container">
        <div
          className="light"
          style={{ backgroundColor: `${isOpen ? "red" : "white"}` }}
        ></div>
        <button className="swicher" onClick={this.onClick}>
          {isOpen ? "Close" : "Open"}
        </button>
      </div>
    );
  }
}

