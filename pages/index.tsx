import React from "react"
import styles from "../styles/Home.module.scss"
import Footer from "../components/footer"
import { UpCharactersPhaseList } from "../components/up-characters"
import { wishCharacters } from "lib/utils/wish-parser"

export default function Home() {
  return (
    <div className={styles.container}>
      123
      <UpCharactersPhaseList phases={wishCharacters} />
      <Footer />
    </div>
  )
}
