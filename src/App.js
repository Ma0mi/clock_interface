// App.js
import React, { Component } from 'react';
import './App.css'; // เรียกใช้ CSS สำหรับ App
import Clock from './components/Clock'; // ต้องนำเข้า Clock หากมีไฟล์นามสกุล .js สำหรับ Clock
import Timer from './components/Timer'; // ต้องนำเข้า Timer หากมีไฟล์นามสกุล .js สำหรับ Timer
import Countdown from './components/Countdown'; // ต้องนำเข้า Countdown หากมีไฟล์นามสกุล .js สำหรับ Countdown



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedComponent: 'Clock', // กำหนดคอมโพเนนต์ที่เลือกเริ่มต้น
    };
  }

  render() {
    const { selectedComponent } = this.state;

    return (
      <div className="app-container">
        <div className="menu">
          <button onClick={() => this.setState({ selectedComponent: 'Clock' })}>CLOCK</button>
          <button onClick={() => this.setState({ selectedComponent: 'Timer' })}>TIMER</button>
          <button onClick={() => this.setState({ selectedComponent: 'Countdown' })}>COUNTDOWN</button>
        </div>

        <div className="component-container">
          {selectedComponent === 'Clock' && <Clock />}
          {selectedComponent === 'Timer' && <Timer />}
          {selectedComponent === 'Countdown' && <Countdown />}
        </div>
      </div>
    );
  }
}

export default App;