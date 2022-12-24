import React from "react"
import styles from "./index.module.scss"

interface InnerBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  interval: number
  size: number
}

const InnerBorder: React.FC<InnerBorderProps> = ({
  interval,
  children,
  size,
  ...restProps
}) => {
  return (
    <div className={styles.container} {...restProps}>
      {children}
      <div className={styles.innerBorder} style={{}}></div>
    </div>
  )
}

export default InnerBorder
