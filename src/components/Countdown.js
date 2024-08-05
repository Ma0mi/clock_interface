import React, { Component } from 'react';
import './countdown.css';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: false,
      warningTime: 64,
      alertTime: 59,
    };
  }

  handleStartCountdown = () => {
    if (this.state.isRunning) {
      clearInterval(this.intervalID);
    } else {
      this.intervalID = setInterval(() => this.tick(), 1000);
    }

    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
  };

  handleReset = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0,
      isRunning: false,
    });
    clearInterval(this.intervalID);
  };

  tick() {
    const { hours, minutes, seconds } = this.state;
    if (hours === 0 && minutes === 0 && seconds === 0) {
      this.handleReset();
      return;
    }

    let newHours = hours;
    let newMinutes = minutes;
    let newSeconds = seconds;

    if (seconds === 0) {
      if (minutes === 0) {
        newHours -= 1;
        newMinutes = 59;
      } else {
        newMinutes -= 1;
      }
      newSeconds = 59;
    } else {
      newSeconds -= 1;
    }

    this.setState({
      hours: newHours,
      minutes: newMinutes,
      seconds: newSeconds,
    });
  }

  render() {
    const { hours, minutes, seconds, isRunning } = this.state;

    let timerClass = 'countdown-timer';
    if (hours === 0 && minutes === 0) {
      if (seconds <= this.state.alertTime) {
        timerClass = 'countdown-timer alert';
      } else if (seconds <= this.state.warningTime) {
        timerClass = 'countdown-timer warning';
      }
    }

    return (
      <div className="countdown-container">
        <div>
          <label>ชั่วโมง: </label>
          <input
            type="number"
            value={hours}
            onChange={(e) => this.setState({ hours: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label>นาที: </label>
          <input
            type="number"
            value={minutes}
            onChange={(e) => this.setState({ minutes: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label>วินาที: </label>
          <input
            type="number"
            value={seconds}
            onChange={(e) => this.setState({ seconds: parseInt(e.target.value) })}
          />
        </div>
        <button
          className={isRunning ? 'stop-button' : 'start-button'}
          onClick={this.handleStartCountdown}
        >
          {isRunning ? 'หยุดนับถอยหลัง' : 'เริ่มนับถอยหลัง'}
        </button>
        <button className="reset-button" onClick={this.handleReset}>
          รีเซ็ต
        </button>
        <div className={timerClass}>{`${hours}:${minutes}:${seconds}`}</div>
      </div>
    );
  }
}

function countdown() {
  return (
    <div className="countdown">
      <Countdown />
    </div>
  );
}

export default countdown;