import React from "react"
import Link from "next/link"
import { Header } from "../header"
import { Navbar } from "../header/navbar"
import styled from "styled-components"
import tw from "twin.macro"
import { Videobar } from "../videobar"
import { FeaturedItems, Items, ListProducts } from "../items"
import { SlideItems } from "../slideItems"
import { Footer } from "../footer"
import { Copyright } from "../footer/copyright"
import { Dropdown, DropUp } from "../assets/svg/Icons"
import { useState } from "react"
import { Sidebar2 } from "../header/navbar/Sidebar2"

export const LayoutForm = styled.div`
  ${tw` mx-5 lg:mx-40 md:mx-20 `}
`
const BackTopContainer = styled.div`
  ${tw`bg-[#276955] my-10 lg:my-0 p-[10px] opacity-[0.7]`}
`
export const ColorLayout = styled.div`
  ${tw`bg-custom-primaryColor`}
`
const SidebarSection = styled.div`
  ${tw`flex md:flex-row flex-col  max-w-[1300px]  mx-auto`}
`
const SideBarTitle = styled.p`
  ${tw`flex md:hidden  items-center gap-1 cursor-pointer `}
`
const SlideContainer = styled.div`
  ${tw`max-w-[1300px] my-10  mx-auto`}
`
export default function Layout({ children }) {
  const [openIRating, setOpenIRating] = useState<boolean>(false)
  return (
    <main className="overflow-x-hidden">
      <ColorLayout>
        <LayoutForm>
          <Header />
        </LayoutForm>
      </ColorLayout>
      <LayoutForm>
        <div className="border-b-2">
          <Navbar />
        </div>
        <SidebarSection>
          <div className = "flex space-x-4">
            {children}
          </div>
        </SidebarSection>
      </LayoutForm>
    </main>
  )
}
