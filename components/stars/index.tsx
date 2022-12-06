import React from "react"

import StarShape from "public/images/icons/star.svg"
import Image from "next/image"

import styles from "./index.module.scss"

interface StarsProps {
  number: number
}

const Stars: React.FC<StarsProps> = ({ number }) => {
  return (
    <div>
      {Array.from(Array(number).keys()).map((_, index) => (
        <Image className={styles.star} key={index} src={StarShape} alt="star" />
      ))}
    </div>
  )
}

export default Stars
