import React from "react"
import { FormattedMessage } from "react-intl"
import styles from "./index.module.scss"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <FormattedMessage id="disclaimer" />
      </div>
      <div>
        <FormattedMessage id="copyrightNotice" />
      </div>
    </footer>
  )
}

export default Footer
