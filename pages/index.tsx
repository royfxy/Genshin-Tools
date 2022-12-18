import React from "react"
import styles from "./Home.module.scss"
import Footer from "../components/footer"
import { Title } from "components/typography"

export default function Home() {
  return (
    <div className={styles.container}>
      <Title level={1}>Genshin Toools</Title>
      <Footer />
    </div>
  )
}
