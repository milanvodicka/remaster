import React from "react"
import Layout from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ height: '500px'}}/>
    <div id='foo'><h1>Foo</h1></div>
    <div style={{ height: '500px'}}/>
    <div id='bar'><h1>Bar</h1></div>
    <div style={{ height: '500px'}}/>
    <div id='baz'><h1>Baz</h1></div>
    <div style={{ height: '500px'}}/>
  </Layout>
)

export default IndexPage
