import React, { Component } from 'react'
import Layout from '../components/layout'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Layout>
        <p>Hello Next.js</p>
      </Layout>
    )
  }
}

Index.propTypes = {}

export default Index
