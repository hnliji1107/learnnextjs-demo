import React, { Component } from 'react'
import { withRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {}

  static getInitialProps = async function(context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
  }

  render() {
    const { router = {}, show = {} } = this.props
    const { query = {} } = router // query参数
    const { name = '', summary = '', image = {} } = show

    return (
      <Layout>
        <h1>{name}</h1>
        <p>{summary}</p>
        <p><img src={image.original} /></p>
      </Layout>
    )
  }
}

export default withRouter(Post)
