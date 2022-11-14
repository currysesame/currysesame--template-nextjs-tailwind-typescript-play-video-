import React from "react"
import Layout from "../components/layouts"
import { Items } from "../components/items"
import { Tabsday2 } from "../components/tabs/day2"
import { textUrl } from "../components/videobar/texturl"

if (process.browser){
  window.textfile = textUrl.day2.text1;
  console.log(window.textfile);
}

const PageTwo = () => {
  return <Layout>
          <Tabsday2 />
          <Items />
        </Layout>
}

export default PageTwo
