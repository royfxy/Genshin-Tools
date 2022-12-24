import React from "react"
import styles from "./index.module.scss"
import Footer from "components/basic-elements/footer"
import { UpCharactersPhaseList } from "./up-characters"
import { wishCharacters } from "lib/utils/wish-parser"
import { Outline, Title } from "components/basic-elements/typography"
import SpiralAbyssStars from "./spiral-abyss-stars"

export default function Home() {
  return (
    <div className={styles.container}>
      <Outline>
        <Title level={1}>Primogem Counter</Title>
      </Outline>

      <Title level={2}>Up Banners</Title>
      <UpCharactersPhaseList phases={wishCharacters} />
      <Title level={2}>Daily Commissions</Title>
      <Title level={2}>Events</Title>
      <Title level={2}>Spiral Abyss</Title>
      <SpiralAbyssStars stars={[]} />
      <Title level={2}>Battle Pass & Welkin Moon</Title>
      <Title level={2}>Paimon&apos;s Bargain</Title>
      <Title level={2}>Other</Title>
      <Footer />
    </div>
  )
}
