import React from "react"
import styles from "./index.module.scss"

import cs from "classnames"

type TextType = "primary" | "secondary"

interface TextProps {
  type?: TextType
  children: React.ReactNode
}

const Text: React.FC<TextProps> = ({ type, children }) => {
  type = type || "primary"

  return <p className={cs([styles.text, styles[type]])}>{children}</p>
}

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6

interface TitleProps {
  level?: TitleLevel
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ level, children }) => {
  level = level || 1
  return React.createElement(`h${level}`, { className: styles.title }, children)
}

export { Text, Title }
