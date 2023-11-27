// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeinMin: 0, timeinSeconds: 0}

  startWatch = () => {
    this.setState(prevState => ({timeinSeconds: prevState.timeinSeconds + 1}))
  }

  clearStopWatch = () => {
    clearInterval(this.intervalId)
  }

  onclickResetBtn = () => {
    clearInterval(this.intervalId)
    this.setState({timeinMin: 0, timeinSeconds: 0})
  }

  onclickStopBtn = () => {
    this.clearStopWatch()
  }

  onclickStartBtn = () => {
    this.intervalId = setInterval(this.startWatch, 1000)
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeinSeconds} = this.state

    const minutes = Math.floor(timeinSeconds / 60)
    const seconds = Math.floor(timeinSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="bgContainer">
        <div className="stopWatchContainer">
          <h1>Stopwatch</h1>
          <div className="stopWatcgBg">
            <div className="timeImgContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <p className="text">Timer</p>
            </div>
            <h1>{this.getElapsedSecondsInTimeFormat()}</h1>
            <div className="btnBg">
              <button
                className="btn start"
                type="button"
                onClick={this.onclickStartBtn}
              >
                Start
              </button>
              <button
                className="btn stop"
                type="button"
                onClick={this.onclickStopBtn}
              >
                Stop
              </button>
              <button
                className="btn pause"
                type="button"
                onClick={this.onclickResetBtn}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
