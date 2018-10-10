import React, { Component } from 'react'
import Layout from '../components/layout'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {}

  render() {
    return (
      <Layout>
        <p>This is the about page.</p>
      </Layout>
    )
  }
}

export default About
