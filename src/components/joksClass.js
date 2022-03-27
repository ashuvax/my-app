import React, { Component } from "react";
import Jok from "./jok";
export default class joks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      entries: [],
    };
  }
  componentDidMount() {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            entries: result.entries,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, entries } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {entries.map((item) => (
            <Jok {...item} />
          ))}
        </div>
      );
    }
  }
}
