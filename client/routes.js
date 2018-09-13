import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { ContactPage } from './components'

export default class Routes extends Component {
  constructor() {
    super()

  }

  render() {

    return (
      <div>
        <Route exact path="/contact-us" component={ContactPage}/>

      </div>
    )
  }
}
