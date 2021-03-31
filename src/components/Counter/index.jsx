import React, { Component } from 'react'
import './style.css'

class Counter extends Component {
  state = {
    video: {
      title: 'Super Video',
      likes: 0,
    }
  }
  add = () => {
    this.setState(state => ({
      ...state,
      video: {
        ...state.video,
        likes: state.video.likes + 1,
      }
    }))
  }

  render () {
    return (
      <div className="counter">
        <h1 className="title">
          { this.state.video.title }
        </h1>
        <button className="button" onClick={this.add} >
          Likes: { this.state.video.likes }
        </button>
      </div>
    )
  }
}

export default Counter