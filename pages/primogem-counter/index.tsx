import React from "react"
import styles from "./index.module.scss"
import Footer from "components/footer"
import { UpCharactersPhaseList } from "components/up-characters"
import { wishCharacters } from "lib/utils/wish-parser"
import { Title } from "components/typography"

export default function Home() {
  return (
    <div className={styles.container}>
      <Title level={3}>Up Banners</Title>
      <UpCharactersPhaseList phases={wishCharacters} />
      <Title level={3}>Daily Commissions</Title>
      <Title level={3}>Events</Title>
      <Title level={3}>Spiral Abyss</Title>
      <Title level={3}>Battle Pass & Welkin Moon</Title>
      <Footer />
    </div>
  )
}
