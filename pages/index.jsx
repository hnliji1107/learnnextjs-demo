import React, { Component } from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static propTypes = {}

  // 打印信息, 页面操作时在客户端控制台中查看, 页面刷新时在服务端终端查看。
  static getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
      shows: data
    }
  }

  render() {
    const { shows = [] } = this.props

    return (
      <Layout>
        <h1 className="example">Batman TV Shows</h1>
        <ul>
          {
            shows.map(({show}) => (
              <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
            ))
          }
        </ul>
        <p>
          <img src="/static/haowan.gif" alt="/" />
        </p>
      </Layout>
    )
  }
}

export default Index
