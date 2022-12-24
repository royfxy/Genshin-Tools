import { Text } from "components/basic-elements/typography"
import React from "react"
import { FormattedMessage } from "react-intl"
import styles from "./index.module.scss"

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Text size="s" type="secondary">
        <FormattedMessage id="disclaimer" />
        <br />
        <FormattedMessage id="copyrightNotice" />
      </Text>
    </footer>
  )
}

export default Footer
