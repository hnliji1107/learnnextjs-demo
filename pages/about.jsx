import React, { Component } from 'react'
import Layout from '../components/layout'

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <p>This is the about page.</p>
      </Layout>
    )
  }
}

About.propTypes = {}

export default About
