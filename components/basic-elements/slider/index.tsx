import React, { useEffect } from "react"
import styles from "./index.module.scss"
import RCSlider, { SliderProps as RCSliderProps } from "rc-slider"

import cs from "classnames"

interface SliderProps extends RCSliderProps {
  control?: boolean
  colorScheme?: "light" | "dark" | "default"
}

const Slider: React.FC<SliderProps> = ({ className, ...props }) => {
  const colorScheme = props.colorScheme ? props.colorScheme : "default"

  const min = props.min ? props.min : 0
  const max = props.max ? props.max : 100
  const value = props.value ? (props.value as number) : 0
  const disabled = props.disabled ? props.disabled : false
  className = className ? className : ""
  const onChange = props.onChange
  const controlValue = (increase: boolean) => () => {
    if (increase) {
      if (value < max) {
        onChange ? onChange(value + 1) : null
      }
    } else {
      if (value > min) {
        onChange ? onChange(value - 1) : null
      }
    }
  }

  useEffect(() => {
    console.log(cs([styles.num, styles.l]))
  }, [])

  return (
    <div className={cs([styles.slider, className, colorScheme])}>
      <button
        disabled={value === min || disabled}
        className={cs([styles.control, styles.l, styles[colorScheme]])}
        onClick={controlValue(false)}
      >
        -
      </button>
      <div className={cs([styles.num, styles.l])}>{min}</div>
      <RCSlider className={colorScheme} {...props} />
      <div className={cs([styles.num, styles.r])}>{max}</div>
      <button
        disabled={value === max || disabled}
        className={cs([styles.control, styles.r, styles[colorScheme]])}
        onClick={controlValue(true)}
      >
        +
      </button>
    </div>
  )
}

export default Slider
