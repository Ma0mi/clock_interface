// Timer.js
import React, { Component } from 'react';
import './timer.css'; // เรียกใช้ CSS จากไฟล์ timer.css

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0, // เวลาที่ผ่านไป (เริ่มจาก 0)
      isRunning: false, // ตัวแปรสถานะสำหรับเริ่มหรือหยุดจับเวลา
    };
  }

  handleStartStop = () => {
    if (this.state.isRunning) {
      // หยุดจับเวลา
      clearInterval(this.intervalID);
    } else {
      // เริ่มจับเวลา
      this.intervalID = setInterval(() => this.tick(), 100);
    }

    this.setState((prevState) => ({
      isRunning: !prevState.isRunning,
    }));
  };

  handleReset = () => {
    // รีเซ็ตเวลาเป็น 0
    this.setState({ time: 0, isRunning: false });
    clearInterval(this.intervalID);
  };

  tick() {
    // อัพเดทเวลาทุก 0.1 วินาที
    this.setState((prevState) => ({
      time: prevState.time + 0.1,
    }));
  }

  render() {
    const { time, isRunning } = this.state;
    const formattedTime = time.toFixed(1);

    return (
      <div className="timer-container"> {/* ใช้คลาส CSS ในนี้ */}
        <h1>จับเวลา: {formattedTime} วินาที</h1>
        <button onClick={this.handleStartStop} className="start-stop-button"> {/* ใช้คลาส CSS ในนี้ */}
          {isRunning ? 'หยุดจับเวลา' : 'เริ่มจับเวลา'}
        </button>
        <button onClick={this.handleReset} className="reset-button"> {/* ใช้คลาส CSS ในนี้ */}
          รีเซ็ต
        </button>
      </div>
    );
  }
}

export default Timer;
