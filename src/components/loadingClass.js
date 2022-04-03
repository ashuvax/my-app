import React, { Component } from 'react'

export default class loadingClass extends Component {

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log("Loading...class");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>loading...</div>;
  }
}
