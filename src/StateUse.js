import React, { Component } from 'react'

export class StateUse extends Component {
    constructor(props) {
      super()
    
      this.state = {
          Firstname: 'Anshika',
          Email: 'ansgupta.01@gmail.com'
      }
    }
  render() {
    return (
        <div>
            <h1>
                Hey Hi, I'm {this.state.Firstname}
            </h1>
            <h1>
                My Email id is: {this.state.Email}
            </h1>
      </div>
    )
  }
}

export default StateUse