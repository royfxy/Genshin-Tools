import "../styles/globals.scss"
import "../styles/colors.scss"
import "../styles/font.scss"
import "../styles/transition.scss"
import type { AppProps } from "next/app"
import React from "react"

import { IntlProvider } from "react-intl"
import lang from "lib/lang/lang"

const locale = "zh-CN"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale={locale} messages={lang[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}
