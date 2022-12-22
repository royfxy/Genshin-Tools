import Slider from "components/basic-elements/slider"
import Image from "next/image"
import React from "react"
import styles from "./index.module.scss"

import background from "/public/images/background/spiral-abyss.png"

import cs from "classnames"
import { IconText, Text, Title } from "components/basic-elements/typography"

import Primogem from "public/images/items/Primogem.png"

interface SpiralAbyssStarsProps {
  stars: number[]
}

const SpiralAbyssStars: React.FC<SpiralAbyssStarsProps> = () => {
  // Spiral Abyss
  const [spiralAbyssStars, setSpiralAbyssStars] = React.useState<number[]>([
    9, 9, 9, 6,
  ])

  const onSpiralAbyssSliderChange = (
    value: number | number[],
    index: number
  ) => {
    const newSpiralAbyssStars = [...spiralAbyssStars]
    newSpiralAbyssStars[index] = value as number
    setSpiralAbyssStars(newSpiralAbyssStars)
  }

  const primogems = React.useMemo(() => {
    return spiralAbyssStars.map((value) => {
      return Math.floor(value / 3) * 50
    })
  }, [spiralAbyssStars])
  return (
    <div className={cs([styles.container, "dark"])}>
      <Image
        className={styles.image}
        src={background}
        fill
        alt={""}
        sizes="90vw"
      />
      <div className={styles.content}>
        <Title level={3}>Stars Each Level</Title>
        <div className={styles.levelsContainer}>
          {spiralAbyssStars.map((value, index) => (
            <div className={styles.levelContainer} key={index}>
              <div className={styles.levelHeaderContainer}>
                <Text strong>Level {index + 9}</Text>
                <Text strong>{value} Stars</Text>
                <div>
                  <IconText strong icon={Primogem.src}>
                    {primogems[index]}
                  </IconText>
                </div>
              </div>
              <Slider
                className={styles.slider}
                colorScheme={"dark"}
                min={0}
                max={9}
                onChange={(value) => onSpiralAbyssSliderChange(value, index)}
                value={value}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SpiralAbyssStars
