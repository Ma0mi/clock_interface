import React, { Component } from 'react';
import './clock.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    const { time } = this.state;
    return (
      <div className="clock-container">
        <p>ขณะนี้เป็นเวลา</p>
        <h1>{time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

function clock() {
  return (
    <div className="clock">
      <Clock />
    </div>
  );
}

export default clock;