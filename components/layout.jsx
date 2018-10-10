import React, { Component } from 'react'
import Header from './header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {}

  render() {
    return (
      <div style={layoutStyle}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout
