import React from "react"
import styles from "./Home.module.scss"
import Footer from "../components/basic-elements/footer"
import { Title } from "components/basic-elements/typography"

export default function Home() {
  return (
    <div className={styles.container}>
      <Title level={1}>Genshin Toools</Title>
      <Footer />
    </div>
  )
}
