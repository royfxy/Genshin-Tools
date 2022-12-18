import "../styles/globals.scss"
import "../styles/colors.scss"
import "../styles/font.scss"
import "../styles/transition.scss"
import "../styles/space.scss"
import type { AppProps } from "next/app"
import React, { useState } from "react"

import { IntlProvider } from "react-intl"
import lang from "lib/lang/lang"

interface LocaleContextProps {
  locale: string
  setLocale: (locale: string) => void
}

const LocaleContext = React.createContext<LocaleContextProps | null>(null)

export default function App({ Component, pageProps }: AppProps) {
  const [locale, setLocale] = useState("zh-CN")
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <IntlProvider locale={locale} messages={lang[locale]}>
        <Component {...pageProps} />
      </IntlProvider>
    </LocaleContext.Provider>
  )
}

export { LocaleContext }
