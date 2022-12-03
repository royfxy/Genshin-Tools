import "../styles/globals.scss"
import type { AppProps } from "next/app"
import React from "react"

import { IntlProvider } from "react-intl"
import lang from "./lang/lang"

const locale = "zh"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntlProvider locale={locale} messages={lang[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  )
}
