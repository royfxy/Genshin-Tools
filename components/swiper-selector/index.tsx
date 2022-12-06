import React from "react"
import {
  Swiper,
  SwiperProps,
  SwiperSlide,
  SwiperSlideProps,
} from "swiper/react"

import styles from "./index.module.scss"

import "swiper/scss"

interface SwiperSelectorProps extends SwiperProps {
  children: React.ReactNode
  value: number
}

export const SwiperSelector: React.FC<SwiperSelectorProps> = (props) => {
  const { value, ...rest } = props
  return <Swiper loopAdditionalSlides={5} slidesPerView={"auto"} {...rest} />
}

type SwiperSelectorItemProps = SwiperSlideProps

const SwiperSelectorItem: React.FC<SwiperSelectorItemProps> = (props) => {
  return <SwiperSlide className={styles.swiperSelectorItem} {...props} />
}

SwiperSelectorItem.displayName = "SwiperSlide"

export { SwiperSelectorItem }
