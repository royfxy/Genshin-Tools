import zh_CN from "./zh-CN.json"
import en_US from "./en-US.json"

import { flatten } from "flat"

type LangMap = {
  [key: string]: Record<string, string>
}

const lang: LangMap = {
  "zh-CN": flatten(zh_CN),
  "en-US": flatten(en_US),
}

export default lang
