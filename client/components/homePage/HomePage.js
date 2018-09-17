import React, { Component } from 'react'
import { Slider } from '../../components'
import './homepage.css'


export default class HomePage extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {

    return (
      <div className="homepage-container">
        <Slider />


      </div>
    )
  }
}
