import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Categories from "../components/Categories"
import Freelance from "../components/Freelance"
import StartNow from "../components/StartNow"
import Stats from "../components/Stats"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <Freelance/> 
    <Stats/>
    <Categories heading="Most Popular Categories"/>
    <StartNow/>
    
  </Layout>
)

export default IndexPage
