import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Portfolio from "../components/Portfolio"

const IndexPage = () => (
  <Layout>
    <Hero
      title="Hi people"
      subtitle="Now go build something great."
      imageSrc="https://unsplash.it/2000/1000"
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ height: "500px" }} />
    <Hero
      id="foo"
      title="Foo"
      subtitle="Foo bar baz blah"
      imageSrc="https://unsplash.it/2000/1000"
    />
    <div style={{ height: "500px" }} />
    <Hero
      id="bar"
      title="Bar"
      subtitle="Portfolio"
      imageSrc="https://unsplash.it/2000/1000"
    />
    <Portfolio titles={['A', 'B', 'C', 'D', 'E', 'F', 'G']} />
    <div style={{ height: "500px" }} />
    <div id="baz">
      <h1>Baz</h1>
    </div>
    <div style={{ height: "500px" }} />
  </Layout>
)

export default IndexPage
