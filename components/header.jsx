import React, { Component } from 'react'
import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {}

  render() {
    return (
      <div style={{ marginBottom: '20px' }}>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
      </div>
    )
  }
}

export default Header
