import zh from "./zh.json"
import en from "./en.json"

type LangMap = {
    [key:string]: Record<string, string>
}

const lang: LangMap = {
  "zh": zh,
  "us": en
}

export default lang