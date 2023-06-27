import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class news extends Component {
  render() {
    return (
      <div>
        This is news item
        <Newsitem/>
      </div>
    )
  }
}

export default news