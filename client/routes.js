import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ContactPage, HomePage } from './components'

export default class Routes extends Component {
  constructor() {
    super()

  }

  render() {

    return (
      <div>
        <Route exact path="/contact-us" component={ContactPage}/>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={HomePage} />
      </div>
    )
  }
}
