import React from "react"
import styles from "./index.module.scss"

import cs from "classnames"
import Image from "next/image"

const fontSizes = {
  xs: 10,
  s: 12,
  m: 16,
  l: 20,
  xl: 24,
  xxl: 32,
}

type TextType = "primary" | "secondary"

interface TextProps {
  type?: TextType
  strong?: boolean
  size?: "xs" | "s" | "m" | "l" | "xl" | number
  children: React.ReactNode
}

const Text: React.FC<TextProps> = ({ type, strong, size, children }) => {
  type = type || "primary"
  strong = strong || false

  size = size || "m"

  const elemType = strong ? "strong" : "span"

  return React.createElement(
    `${elemType}`,
    {
      className: cs([
        styles.text,
        styles[type],
        typeof size === "number" ? undefined : styles[size],
      ]),
      style: typeof size === "number" ? { fontSize: size } : undefined,
    },
    children
  )
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

interface OutlineProps {
  size?: number
  children: React.ReactNode
}

const Outline: React.FC<OutlineProps> = ({ size, children }) => {
  size = size || 2
  return (
    <div className={styles.outline}>
      <div className={styles.outlineFront}>{children}</div>
      <div
        className={styles.outlineBack}
        style={{
          WebkitTextStrokeWidth: size,
        }}
      >
        {children}
      </div>
    </div>
  )
}

interface IconTextProps extends TextProps {
  icon: string
}

const IconText: React.FC<IconTextProps> = ({
  icon,
  children,
  ...restprops
}) => {
  const { size } = restprops
  const iconSize = typeof size === "number" ? size : fontSizes[size || "m"]
  return (
    <span className={styles.iconText}>
      <Image
        className={styles.icon}
        src={icon}
        alt={""}
        width={iconSize}
        height={iconSize}
      />
      <Text {...restprops}>{children}</Text>
    </span>
  )
}

export { Text, Title, Outline, IconText }
