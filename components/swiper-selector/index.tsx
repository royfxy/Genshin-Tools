import React from "react"
import {
  Swiper,
  SwiperProps,
  SwiperSlide,
  SwiperSlideProps,
} from "swiper/react"

import styles from "./index.module.scss"

import "swiper/scss"
import { Mousewheel } from "swiper"

interface SwiperSelectorProps extends SwiperProps {
  children: React.ReactNode
  value: number
}

export const SwiperSelector: React.FC<SwiperSelectorProps> = (props) => {
  const { ...rest } = props
  return (
    <Swiper
      onActiveIndexChange={(swiper) => {
        console.log(swiper.activeIndex)
      }}
      loopAdditionalSlides={5}
      slidesPerView={"auto"}
      mousewheel
      modules={[Mousewheel]}
      {...rest}
    />
  )
}

interface SwiperSelectorItemProps extends SwiperSlideProps {
  selected?: boolean
}

const SwiperSelectorItem: React.FC<SwiperSelectorItemProps> = (props) => {
  return <SwiperSlide className={styles.swiperSelectorItem} {...props} />
}

SwiperSelectorItem.displayName = "SwiperSlide"

export { SwiperSelectorItem }
