import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onApplyBrake = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="title"> SPEEDOMETER </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <p className="heading">Speed is {count}mph</p>
        <p className="speed-limits"> Min Limit is 0mph.Max limit is 200Mph</p>
        <div>
          <button
            className="button accelerate"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            className="button apply-brake"
            type="button"
            onClick={this.onApplyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
