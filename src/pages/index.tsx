import React from "react"
import Layout from "../components/layouts"
import { Tabsday1 } from "../components/tabs/day1/"
import { Items } from "../components/items"
import { textUrl } from "../components/videobar/texturl"


if (process.browser){
  window.textfile = textUrl.day1.text1;
  console.log(window.textfile);
}

const PageOne = props => {
  return (
    <Layout>
      <Tabsday1 />
      <Items />
    </Layout>
  )
}

export default PageOne
